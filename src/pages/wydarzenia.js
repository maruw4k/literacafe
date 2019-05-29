import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import MainTemplate from 'templates/MainTemplate';
import Button from 'components/Button';
import HeroImage from 'components/HeroImage';
import { theme } from 'assets/styles/theme';

import styled from 'styled-components';

const PostWrapper = styled.div`
  margin: 3rem auto 5rem auto;
  ${theme.mq.tablet} {
    margin: 6rem auto 6rem auto;
  }
`;

const ArticleContainer = styled.article`
  height: 500px;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 2fr 0.6fr 0.6fr 1fr;
  grid-template-areas: 'photo' 'title' 'description' 'btn';

  ${theme.mq.tablet} {
    margin-bottom: 3rem;
    height: 600px;
    grid-template-columns: 0.7fr 0.7fr 1.7fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: '. title photo' '. description photo' '. btn photo';
  }
`;

const ArticlePhotoWrapper = styled(Img)`
  grid-area: photo;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const ArticleTitle = styled.h2`
  grid-area: title;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0 15px;

  ${theme.mq.tablet} {
    align-items: flex-end;
    padding-left: 0;
    padding-right: 3rem;
  }
`;

const ArticleLead = styled.p`
  grid-area: description;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 0;

  ${theme.mq.tablet} {
    padding-left: 0;
    padding-right: 3rem;
  }
`;

const ArticleBtn = styled.div`
  grid-area: btn;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${theme.mq.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
  }
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
      {data.data.allStrapiArticle.edges.map(({ node }) => (
        <ArticleContainer key={node.id}>
          <ArticlePhotoWrapper
            fluid={node.photo.childImageSharp.fluid}
            alt={node.title}
          />
          <ArticleLead>{node.lead}</ArticleLead>
          <ArticleTitle>{node.title}</ArticleTitle>

          <ArticleBtn>
            <Button title="Zobacz" to={node.id} />
          </ArticleBtn>
        </ArticleContainer>
      ))}
    </PostWrapper>
  </MainTemplate>
);

export default NewsPage;

export const query = graphql`
  {
    allStrapiArticle {
      edges {
        node {
          id
          title
          lead
          content
          photo {
            childImageSharp {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
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
