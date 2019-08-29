import React from 'react';
import { graphql } from 'gatsby';
import Hero from 'components/Hero';
import MainTemplate from 'templates/Main/MainTemplate';
import Meals from 'templates/Menu/Meals';
import CategoryNav from 'templates/Menu/CategoryNav';

export default ({ data }) => {
  let groupedMeals = [];

  data.mainCategories.edges.forEach(item => {
    let menu = {};

    menu.categoryName = item.node.name;
    menu.categoryId = item.node.strapiId;
    menu.id = item.node.id;
    menu.photo = item.node.photo;
    menu.subcategories = data.subCategories.edges.filter(
      item => item.node.strapiParent.id === menu.categoryId
    );

    menu.subcategories.forEach(({ node }) => {
      const currentId = node.strapiId;
      node.meals = [];
      node.meals = data.allMeals.edges.filter(function(meal) {
        if (meal.node.subcategory !== null)
          return meal.node.subcategory.id === currentId;
      });
    });

    groupedMeals.push(menu);
  });

  return (
    <MainTemplate>
      <Hero
        fluid={data.mainHeroImg.childImageSharp.fluid}
        height="50vh"
        position="center"
        opacity={0.2}
        text="Menu"
      />

      <CategoryNav categories={data.mainCategories.edges} />

      <Meals groupedMeals={groupedMeals} />
    </MainTemplate>
  );
};

export const query = graphql`
  {
    mainHeroImg: file(relativePath: { eq: "menu-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mainCategories: allStrapiCategory {
      totalCount
      edges {
        node {
          strapiId
          id
          name
          photo {
            childImageSharp {
              fixed(height: 330, width: 220) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
          is_active
        }
      }
    }
    subCategories: allStrapiSubcategory {
      totalCount
      edges {
        node {
          strapiId
          id
          name
          is_active
          strapiParent {
            id
          }
        }
      }
    }
    allMeals: allStrapiMeal {
      edges {
        node {
          id
          strapiId
          name
          price
          additional_info
          subcategory {
            id
          }
        }
      }
    }
  }
`;
