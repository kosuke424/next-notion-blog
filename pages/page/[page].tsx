import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { Pagination } from "../../components/Pagenation";
import { IndexProps,  Params } from "../../types/types";
import { fetchPages } from "../../utils/notion";
import { siteConfig } from "../../site.config";

export const getStaticPaths: GetStaticPaths = async () => {
    const { results } = await fetchPages({});
    const totalCount: number = results.length;
    const PER_PAGE = siteConfig.per_page;
    const range = (start: any, end: any) =>
        [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => {
        return {
            params: {
                page: number.toString(),
            },
        };
    });
    return {
        paths: paths,
        fallback: "blocking",
    };
};
  
export const getStaticProps: GetStaticProps = async (ctx) => {
    const currentPage = Number((ctx.params as Params).page);
    const { results } = await fetchPages({});
    const PER_PAGE = siteConfig.per_page;
    const totalCount: number = results.length;
    const range = (start: any, end: any, length = end - start + 1) =>
        Array.from({ length }, (_, i) => start + i);
    const pagenation = range(1, Math.ceil(totalCount / PER_PAGE));


    const sortedPosts = results.sort((postA: any, postB: any) =>
      new Date(postA.properties.published.date) > new Date(postB.properties.published.date) ? -1 : 1
    );

    const slicedPosts = sortedPosts.slice(
        PER_PAGE * (currentPage - 1),
        PER_PAGE * currentPage
    );
    return {
        props: {
            // pages: results ? results : [],
            // totalCount: totalCount,
            // pages: results,
            pages: slicedPosts,
            pagenation: pagenation,
            currentPage: currentPage,
        },
        revalidate: 60,
    };
};

 
const Page: NextPage<IndexProps> = ({ pages, pagenation, currentPage }) => {
  return (
    <Layout>
      <div className="pt-12">
          {/* <h1 className="text-5xl mb-8">{`#${category}`}</h1> */}
          <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
            {/* Card */}
            {pages.map((page, index) => (
              <Card key={index} page={page} />
            ))}
          </div>
          <Pagination pagenation={pagenation} currentPage={currentPage} />
        </div>
    </Layout>
  );
};
 
export default Page;