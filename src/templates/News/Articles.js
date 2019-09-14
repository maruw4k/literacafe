import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';
import Img from 'gatsby-image';

const PostWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 8rem auto 6rem auto;
  line-height: 1;
`;

const ArticlePhotoWrapper = styled.div`
  grid-area: photo;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const ArticleContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.2fr 0.4fr;
  grid-template-areas: 'photo' 'title' 'description';
`;

const ArticleCategory = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  font-weight: 600;
  padding: 0.7rem 1rem;
  min-width: 90px;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.5rem;
`;

const ArticlePhoto = styled(Img)`
  position: relative;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ArticleTitle = styled.h2`
  grid-area: title;
  display: flex;
  align-items: start;
  margin: 1.5rem 0 1.5rem 0;
  position: relative;

  font-family: ${theme.font.family.title};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ArticleLead = styled.p`
  grid-area: description;
  display: flex;
  align-items: start;
  margin: 0;
  line-height: 1.3;
`;

const StyledLink = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
`;

export default () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiArticle {
          edges {
            node {
              id
              title
              lead
              category
              content
              photo {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <PostWrapper className="container">
        {data.allStrapiArticle.edges.map(({ node }) => (
          <ArticleContainer key={node.id}>
            <ArticlePhotoWrapper>
              <ArticlePhoto
                fluid={node.photo.childImageSharp.fluid}
                alt={node.title}
              />

              <StyledLink to={node.id} />

              {node.category && (
                <ArticleCategory>{node.category}</ArticleCategory>
              )}
            </ArticlePhotoWrapper>

            <ArticleLead>{node.lead}</ArticleLead>

            <ArticleTitle>
              {node.title}
              <StyledLink to={node.id} />
            </ArticleTitle>
          </ArticleContainer>
        ))}
      </PostWrapper>
    )}
  />
);
