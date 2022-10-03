import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { IndexProps } from "../types/types";
import { fetchPages } from "../utils/notion";
import { Pagination } from "../components/Pagenation";
import { siteConfig } from "../site.config";

export const getStaticProps: GetStaticProps = async () => {
  const currentPage = 1;
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
      pages: slicedPosts,
      pagenation: pagenation,
      currentPage: currentPage,
    },
    revalidate: 10,
  };
};
 
// const Home: NextPage<IndexProps> = ({ pages }) => {
const Home: NextPage<IndexProps> = ({ pages, pagenation, currentPage }) => {
  return (
    <Layout>
      <div>
          {/* <h1 className="text-5xl mb-8">{siteConfig.title}</h1> */}
          <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
            {/* Card */}
            {pages.map((page, index) => (
              // <Card key={index} page={page} />
              <Card key={index} page={page} />
            ))}
          </div>
          <Pagination pagenation={pagenation} currentPage={currentPage} />
        </div>
    </Layout>
  );
};
 
export default Home;
