import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useLayoutEffect } from 'react'
import ArticleMeta from '../../components/ArticleMeta';
import Layout from '../../components/Layout';
import { ArticleProps, Params } from "../../types/types";
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

    return {
        props: {
            page: page,
            blocks: blocks,
        },
        revalidate: 1,
    };
};

const Article: NextPage<ArticleProps> = ({ page, blocks }) => {

  // console.log(blocks);

  return (
      <Layout>
        <NextSeo
          title={getText(page.properties.name.title)}
          description={getText(page.properties.description.rich_text)}
          noindex={getCheckbox(page.properties.noindex.checkbox)}
          nofollow={getCheckbox(page.properties.nofollow.checkbox)}
          openGraph={{
            url: `/articles/${getText(page.properties.slug.rich_text)}`,
            title: getText(page.properties.name.title),
            description: getText(page.properties.description.rich_text),
            images: [
              {
                url: getCover(page.cover),
              },
            ],
          }}
        />
        
        <article className="w-full">
          {/* meta section */}
          <div className="my-12">
              <ArticleMeta page={page}/>
          </div>

          {/* table of contents */}
          {/* <div className="font-semibold">Contents</div>
          <nav className="toc" /> */}
          {/* <div className="font-semibold text-2xl text-indigo-800">Contents</div> */}
          <ul className="toc">
           <div className="font-semibold mb-4 text-2xl text-indigo-800">Contents</div>
            {blocks.map((block, index) => {
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
            <NotionBlocks blocks={blocks} isCodeHighlighter={true} />
          </div>
        </article>
      </Layout>
      );
};

export default Article;
