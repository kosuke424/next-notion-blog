import useSWR from "swr"
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import ArticleMeta from '../../components/ArticleMeta';
import Layout from '../../components/Layout';
import { ArticleProps, Params, ArticleParts } from "../../types/types";
// import { BlockType } from "notion-block-renderer";
import { fetchBlocksByPageId, fetchPages } from '../../utils/notion';
import { getCheckbox, getCover, getText } from '../../utils/property';
import NotionBlocks from "notion-block-renderer";
// import tocbot from 'tocbot';
import { NextSeo } from 'next-seo';

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({});
  const paths = results.map((page: any) => {
    return {
      params: {
        slug: getText(page.properties.slug.rich_text),
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params as Params;
    const { results } = await fetchPages({ slug: slug });
    const page = results[0];
    const pageId = page.id;
    const { results: blocks } = await fetchBlocksByPageId(pageId);
    const fallback = { page, blocks }

    return {
        props: {
            // page: page,
            // blocks: blocks,
            slug: slug,
            fallback: fallback,
        },
        revalidate: 60,
    };
};

const fetchArticleParts = async (slug: string): Promise<ArticleParts> => {
  try {
    const { data: articleParts } = await axios.get(`/api/article?slug=${slug}`)
    return articleParts as ArticleParts
  } catch (error) {
    console.log("fetchArticleParts Error!")
    console.log(error)
    return {} as ArticleParts
  }
}

const includeExpiredImage = (fallback: ArticleParts): boolean => {
  const now = Date.now()
  const blocks = fallback.blocks

  return blocks.some(block => {
    if (block.type === 'image') {
      const image = block.image
      if (image.file && image.file.expiry_time && Date.parse(image.file.expiry_time) < now) {
        console.log(image.file.expiry_time);
        console.log("有効期限切れ 記事画像更新！")
        return true
      }
    }
    // TODO: looking for the image block in Children recursively
  })
}
const Article: NextPage<ArticleProps> = ({ slug, fallback }) => {
  // const { data: articleParts, error } = useSWR(true && slug, fetchArticleParts, { fallbackData: fallback })
  const { data: articleParts, error } = useSWR(includeExpiredImage(fallback) && slug, fetchArticleParts, { fallbackData: fallback })

  return (
      <Layout>
        {articleParts &&
          <NextSeo
            title={getText(articleParts.page.properties.name.title)}
            description={getText(articleParts.page.properties.description.rich_text)}
            noindex={getCheckbox(articleParts.page.properties.noindex.checkbox)}
            nofollow={getCheckbox(articleParts.page.properties.nofollow.checkbox)}
            openGraph={{
              url: `/articles/${getText(articleParts.page.properties.slug.rich_text)}`,
              title: getText(articleParts.page.properties.name.title),
              description: getText(articleParts.page.properties.description.rich_text),
              images: [
                {
                  url: getCover(articleParts.page.cover),
                },
              ],
            }}
          />
        }
        
        <article className="w-full">
          {/* meta section */}
          <div className="my-12">
            {articleParts &&
              <ArticleMeta page={articleParts.page}/>
            }
          </div>

          {/* table of contents */}
          {/* <div className="font-semibold">Contents</div>
          <nav className="toc" /> */}
          {/* <div className="font-semibold text-2xl text-indigo-800">Contents</div> */}
          <ul className="toc">
           <div className="font-semibold mb-4 text-2xl text-indigo-800">Contents</div>
            {articleParts && articleParts.blocks.map((block, index) => {
              if (block.type == 'heading_2') {
                return (
              <li key={index}>
                <a href={`#${block.id}`}>
                  {block.heading_2.rich_text[0].plain_text}
                </a>
              </li>
              )
              }            
          })}
          </ul>

          {/* article */}
          <div className="my-12">
            {articleParts && 
              <NotionBlocks blocks={articleParts.blocks} isCodeHighlighter={true} />
            }
          </div>
        </article>
      </Layout>
      );
};

export default Article;
