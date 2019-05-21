import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import HeroImage from 'components/HeroImage';
import styled from 'styled-components';

const PostWrapper = styled.div`
  max-width: 1000px;
  margin: 5rem auto 0 auto;
`;

export default ({ data }) => {
  return (
    <MainTemplate>
      <HeroImage
        fileName="news-main-photo"
        min-height="20vh"
        text="Wydarzenia i newsy"
      />

      <PostWrapper>
        <h2>Ilośc postów {data.allMarkdownRemark.totalCount}</h2>

        {data.allMarkdownRemark.edges.map(({ node }) => (
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
};

export const query = graphql`
  query {
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
  }
`;
