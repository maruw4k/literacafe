import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MainTemplate from 'templates/Main/MainTemplate';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { theme } from 'assets/styles/theme';
import Button from 'components/Button';

const ArticleWrapper = styled.div`
  padding-bottom: 13rem;
`;

const HeaderWrapper = styled.div`
  padding-top: 2rem;
  margin: 4rem 0 5rem 0;
  text-align: center;

  ${theme.mq.tablet} {
    margin-top: 5rem;
  }
`;

const ArticleDate = styled.h3`
  letter-spacing: 1px;
  font-size: 1.2rem;
  color: grey;
  text-align: center;
  margin: 1.5rem 0 1.5rem 0;
  padding: 0;
`;

const ArticleCategory = styled.h3`
  letter-spacing: 1px;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  padding: 1rem 3rem;
  color: white;
  background: black;
  display: inline-block;
`;

const ArticleHeader = styled.h2`
  font-family: ${theme.font.family.title};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  position: relative;
  margin: 0;
`;

const ArticleParagraph = styled(ReactMarkdown)`
  max-width: 600px;
  margin: 0 auto 2rem auto;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ArticlePhotoWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 0 0;
`;

export default ({ data }) => {
  const post = data.strapiArticle;

  const articleDate = new Date(post.created_at);
  const articleFormattedDate =
    articleDate.getDate() +
    '/' +
    (articleDate.getMonth() + 1) +
    '/' +
    articleDate.getFullYear();

  const transformImageUri = input =>
    /^https?:/.test(input) ? input : `${process.env.GATSBY_STRAPI_API_URL}${input}`;

  return (
    <MainTemplate>
      <ArticleWrapper className="container">
        <StyledButtonContainer>
          <Button title="Wróc" to="wydarzenia" isReverseArrow />
        </StyledButtonContainer>

        <HeaderWrapper>
          <ArticleHeader>{post.title}</ArticleHeader>
          <ArticleDate>{articleFormattedDate}</ArticleDate>
          {post.category && <ArticleCategory>{post.category}</ArticleCategory>}
        </HeaderWrapper>

        <ArticleParagraph
          source={post.content}
          transformImageUri={transformImageUri}
        />

        {post.photo && (
          <ArticlePhotoWrapper>
            <Img fluid={post.photo.childImageSharp.fluid} alt={post.title} />
          </ArticlePhotoWrapper>
        )}
      </ArticleWrapper>
    </MainTemplate>
  );
};

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      category
      created_at
      photo {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
