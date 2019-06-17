import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Hero from 'components/Hero';
import MainTemplate from 'templates/Main/MainTemplate';
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
  const post = data.strapiArticle;
  return (
    <MainTemplate>
      <Hero
        fluid={post.photo.childImageSharp.fluid}
        height="50vh"
        opacity={0}
      />

      <ArticleWrapper className="container">
        <ArticleHeader title={post.title} />

        <ArticleParagraph dangerouslySetInnerHTML={{ __html: post.content }} />

        <ArticlePhotoWrapper>
          <Img fluid={post.photo.childImageSharp.fluid} alt={post.title} />
        </ArticlePhotoWrapper>
      </ArticleWrapper>
    </MainTemplate>
  );
};

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      photo {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
