import { siteConfig } from "../site.config";

export  const makeSlicedPosts = (results: any, currentPage: number) => {
  const PER_PAGE = siteConfig.per_page;  
  const sortedPosts = results.sort((postA: any, postB: any) =>
  new Date(postA.properties.published.date) > new Date(postB.properties.published.date) ? -1 : 1
  );

  const slicedPosts = sortedPosts.slice(
      PER_PAGE * (currentPage - 1),
      PER_PAGE * currentPage
  );
  return slicedPosts;
}