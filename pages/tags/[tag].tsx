import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { Params, TagProps } from "../../types/types";
import { fetchPages, includeExpiredFeaturedImages, reFetchPages } from "../../utils/notion";
import { getMultiSelect } from "../../utils/property";

export const getStaticPaths: GetStaticPaths = async () => {
    const { results }: { results: Record<string, any>[] } = await fetchPages({});
 
    const pathSet: Set<string> = new Set();
    for (const page of results) {
        for (const tag of getMultiSelect(page.properties.tags.multi_select)) {
        pathSet.add(tag);
        }
    }
    
    const paths = Array.from(pathSet).map((tag) => {
        return {
        params: {
            tag: tag,
        },
        };
    });
    
    return {
        paths: paths,
        fallback: "blocking",
    };
};
  
export const getStaticProps: GetStaticProps = async (ctx) => {
    const { tag } = ctx.params as Params;
    const { results } = await fetchPages({ tag: tag });
    return {
        props: {
            pages: results ? results : [],
            tag: tag,
        },
        revalidate: 60,
    };
};
 
const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  const { data: falllbackPages, error } = useSWR(includeExpiredFeaturedImages(pages) && pages, reFetchPages, { fallbackData: pages })
  return (
    <Layout>
      <div className="pt-12">
          <h1 className="text-5xl mb-8">{`#${tag}`}</h1>
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
 
export default Tag;
