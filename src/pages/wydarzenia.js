import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import HeroImage from 'components/HeroImage';
import styled from 'styled-components';

const PostWrapper = styled.div`
  max-width: 1000px;
  margin: 5rem auto 5rem auto;
`;

export default ({ data }) => {
  return (
    <MainTemplate>
      <HeroImage
        fileName={data.file.publicURL}
        mihHeight="20vh"
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
    file(name: { eq: "news-main-photo" }) {
      name
      publicURL
    }
  }
`;
