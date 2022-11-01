import type { GetStaticProps, NextPage } from "next";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { IndexProps } from "../types/types";
import { fetchPages, includeExpiredFeaturedImages, reFetchPages } from "../utils/notion";
import { Pagination } from "../components/Pagenation";
import { siteConfig } from "../site.config";
import useSWR from "swr";
import { makeSlicedPosts } from "../utils/slicedPosts";

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  const currentPage = 1;
  const PER_PAGE = siteConfig.per_page;
  const totalCount: number = results.length;
  const range = (start: any, end: any, length = end - start + 1) =>
        Array.from({ length }, (_, i) => start + i);
  const pagenation = range(1, Math.ceil(totalCount / PER_PAGE));
  const slicedPosts = makeSlicedPosts(results, currentPage);

  return {
    props: {
      // pages: results ? results : [],
      pages: slicedPosts,
      pagenation: pagenation,
      currentPage: currentPage,
    },
    revalidate: 60,
  };
};
 
const Home: NextPage<IndexProps> = ({ pages, pagenation, currentPage }) => {
  const { data: falllbackPages, error } = useSWR(includeExpiredFeaturedImages(pages) && pages, reFetchPages, { fallbackData: pages })
  // const { data: falllbackPages, error } = useSWR(true && reFetchPages, { fallbackData: pages })
  
  return (
    <Layout>
      <div>
          {/* <h1 className="text-5xl mb-8">{siteConfig.title}</h1> */}
          <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
            {/* Card */}
            {falllbackPages && falllbackPages.map((page, index) => (
              <Card key={index} page={page} />
            ))}
          </div>
          <Pagination pagenation={pagenation} currentPage={currentPage} />
        </div>
    </Layout>
  );
};
 
export default Home;
