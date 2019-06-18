import { graphql, useStaticQuery } from 'gatsby';

const useSiteText = () => {
  const { strapiText } = useStaticQuery(
    graphql`
      query SITE_TEXT_QUERY {
        allStrapiText {
          edges {
            node {
              key
              pl
              eng
            }
          }
        }
      }
    `
  );
  return strapiText;
};

export default useSiteText;
