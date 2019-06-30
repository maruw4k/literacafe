import { graphql, useStaticQuery } from 'gatsby';

const useSiteText = () => {
  const { allStrapiText } = useStaticQuery(
    graphql`
      query SITE_TEXT_QUERY {
        allStrapiText {
          nodes {
            key
            pl
            eng
          }
        }
      }
    `
  );

  const siteTexts = {};
  allStrapiText.nodes.map(item => {
    return (siteTexts[item.key] = item.pl);
  });

  return siteTexts;
};

export default useSiteText;
