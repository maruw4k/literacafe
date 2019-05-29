import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import HeroImage from 'components/HeroImage';
import SectionHeader from 'components/SectionHeader';
import styled from 'styled-components';

const ArticleWrapper = styled.div`
  padding-bottom: 13rem;
`;

const ArticleHeader = styled(SectionHeader)`
  margin: 3rem auto 5rem auto;
`;

const ArticleParagraph = styled.div`
max-width: 600px;
margin: 0 auto 2rem auto;
`;

const ArticlePhotoWrapper = styled.div`
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <MainTemplate>
      <HeroImage
        fileName={post.frontmatter.image}
        minHeight="50vh"
        opacity={0}
      />

      <ArticleWrapper className="container">
        <ArticleHeader title={post.frontmatter.title} />

        <ArticleParagraph dangerouslySetInnerHTML={{ __html: post.html }} />

        <ArticlePhotoWrapper>
          <img src={post.frontmatter.image} alt="" />
        </ArticlePhotoWrapper>
      </ArticleWrapper>
    </MainTemplate>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`;
