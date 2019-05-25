import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import HeroImage from 'components/HeroImage';
import styled from 'styled-components';

const PostWrapper = styled.div`
  max-width: 1000px;
  margin: 5rem auto 5rem auto;
`;

const NewsPage = data => (
    <MainTemplate>
      <HeroImage
        fileName={data.data.mainHeroImg.childImageSharp.fluid.src}
        mihHeight="30vh"
        opacity={0.2}
        backgroundSize="cover"
        text="Wydarzenia i newsy"
      />

      <PostWrapper>
        <h2>Ilośc postów {data.data.allMarkdownRemark.totalCount}</h2>

        {data.data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </PostWrapper>
    </MainTemplate>
);

export default NewsPage;

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
        }
      }
    }
    mainHeroImg: file(relativePath: { eq: "news-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
