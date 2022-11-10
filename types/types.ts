import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";
import { BlockType } from "notion-block-renderer";

export type LayoutProps = {
    children: ReactNode;
};

export type PageProps = {
    slug: string;
    name: string;
    author: string;
    cover: string;
    published: string;
    tags: string[];
    content: string;
    categories: string;
};

export type CardProps = { page: PageType };
export type FallbackPage = {
  [key: string]: PageType
}
export type ArticleParts = {
  page: PageType;
  blocks: BlockType[];
}
export type ArticleProps = {
  slug: string
  fallback: ArticleParts;
};
export type ArticleMetaProps = CardProps;

export type PagenationProps = {pagenation: []} & { currentPage: number};
export type IndexProps = { pages: PageType[] } & PagenationProps;
export type TagProps = IndexProps & { tag: string };
export type CategoryProps = IndexProps & { category: string };

export type BlockProps = { block: BlockType };

export type Params = ParsedUrlQuery & {
    slug?: string;
    tag?: string;
    category?: string;
    page?: string;
};

export type FileType = {
    type?: string
    file?: { url: string,  expiry_time: string};
    external?: { url: string };
  };
   
  export type AnnotationType = {
    bold: boolean;
    code: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    color: string;
  };
   
  export type RichTextType = {
    plain_text: string;
    href: string | null;
    annotations: AnnotationType;
  };
   
  export type PropertyType = {
    name: { title: RichTextType[] };
    author: { rich_text: RichTextType[] };
    slug: { rich_text: RichTextType[] };
    published: { date: { start: string } };
    isPublic: { checkbox: boolean };
    tags: { multi_select: [{ name: string }] };
    categories: { select: { name: string } };
    description: { rich_text: RichTextType[] };
    noindex: { checkbox: boolean };
    nofollow: { checkbox: boolean };
  };
   
  export type PageType = {
    id: string;
    cover: FileType | null;
    // properties: Record<string, any>;
    properties: PropertyType;
  };

//   export type BlockType = {
//     type: string;
//     heading_1: { rich_text: RichTextType[] };
//     heading_2: { rich_text: RichTextType[] };
//     paragraph: { rich_text: RichTextType[] };
//   };

// portforio
export type ModalProps = {
  show: boolean,
  index: number,
  close: any
}