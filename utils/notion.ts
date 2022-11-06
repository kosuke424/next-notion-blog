import { Client } from "@notionhq/client";
import { PageType } from "../types/types";
import axios from 'axios'

const notion = new Client({ auth: process.env.NOTION_KEY as string });
const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export const fetchPages = async ({
    slug,
    tag,
    category,
}: {
    slug?: string;
    tag?: string;
    category?: string;
}) => {
    const and: any = [
        {
          property: "isPublic",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "slug",
          rich_text: {
            is_not_empty: true,
          },
        },
    ];

    if (slug) {
        and.push({
            property: "slug",
            rich_text: {
            equals: slug,
            },
        });
    }

    if (tag) {
        and.push({
            property: "tags",
            multi_select: {
            contains: tag,
            },
        });
    }

    if (category) {
        and.push({
            property: "categories",
            select: {
            equals: category,
            },
        });
    }

    return await notion.databases.query({
        database_id: DATABASE_ID,
        filter: {
            and: and,
        },
        sorts: [
            {
            property: "published",
            direction: "descending",
            },
        ],
    });
};

export const fetchBlocksByPageId = async (pageId: string) => {
    const data = [];
    let cursor = undefined;
    while (true) {
        const { results, next_cursor }: any = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
        });
        data.push(...results);
        if (!next_cursor) break;
        cursor = next_cursor;
    }
    return { results: data };
}
export const reFetchPage = async (slug: string): Promise<PageType> => {
    try {
      const { data: page } = await axios.get(`/api/page?slug=${slug}`)
      return page as PageType
    } catch (error) {
      console.log("fetechPage")
      console.log(error)
      return {} as PageType
    }
  }

  export const reFetchPages = async (): Promise<PageType[]> => {
    try {
      const { data: pages } = await axios.get("/api/pages")
      console.log("reFetchPages no problem!")
      console.log(pages)
      return pages as PageType[]
    } catch (error) {
      console.log("reFetechPages error!")
      console.log(error)
      return [] as PageType[]
    }
  }

  export const includeExpiredFeaturedImages = (pages: PageType[]): boolean => {
    const now = Date.now()
    console.log("アイキャッチ画像の有効期限チェック！")
    return pages.some((page) => {
        if (page.cover) {
            if (page.cover.type === 'file') {
                const image = page.cover
                if(image.file) {
                    console.log(image.file.expiry_time);
                }            
                if (image.file && image.file.expiry_time && Date.parse(image.file.expiry_time) < now) {
                    console.log("有効期限切れ アイキャッチ画像更新！")
                    return true
                }
            }
        }
        return false
    })
  }