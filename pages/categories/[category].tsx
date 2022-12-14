import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { Params, CategoryProps } from "../../types/types";
import { fetchPages, includeExpiredFeaturedImages, reFetchPages } from "../../utils/notion";
import { getSelect } from "../../utils/property";
import useSWR from "swr";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({});
  const paths = results.map((page: any) => {
    return {
      params: {
        category: getSelect(page.properties.categories.select),
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
};
  
export const getStaticProps: GetStaticProps = async (ctx) => {
    const { category } = ctx.params as Params;
    const { results } = await fetchPages({ category: category });
    return {
        props: {
            pages: results ? results : [],
            category: category,
        },
        revalidate: 60,
    };
};

 
const Category: NextPage<CategoryProps> = ({ pages, category }) => {
  const { data: falllbackPages, error } = useSWR(includeExpiredFeaturedImages(pages) && pages, reFetchPages, { fallbackData: pages })
  
  return (
    <Layout>
      <div className="pt-12">
          <h1 className="text-5xl mb-8">{`#${category}`}</h1>
          <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
            {/* Card */}
            {falllbackPages && falllbackPages.map((page, index) => (
              <Card key={index} page={page} />
            ))}
          </div>
        </div>
    </Layout>
  );
};
 
export default Category;
