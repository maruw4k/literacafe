import React from 'react';
import { Link, graphql } from 'gatsby';
import MainTemplate from 'templates/MainTemplate';
import Button from 'components/Button';
import Img from 'gatsby-image';
import HeroImage from 'components/HeroImage';

import styled from 'styled-components';

const PostWrapper = styled.div`
  //max-width: 1000px;
  margin: 5rem auto 5rem auto;
`;

const ArticleContainer = styled.article`
  display: grid;
  grid-template-columns: 0.7fr 0.7fr 1.7fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: '. title photo' '. description photo' '. btn photo';
  margin-bottom: 2rem;
  
  div {
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

const ArticlePhoto = styled.div`
  grid-area: photo;
`;

const ArticleTitle = styled.h2`
  grid-area: title;
`;

const ArticleDescription = styled.p`
  grid-area: description;
`;

const ArticleBtn = styled.div`
  grid-area: btn;
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
      {data.data.allMarkdownRemark.edges.map(({ node }) => (
        <ArticleContainer key={node.id}>
          <ArticlePhoto>
            <img src={node.frontmatter.image} alt="" />
          </ArticlePhoto>
          <ArticleDescription>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </ArticleDescription>
          <ArticleTitle>{node.frontmatter.title}</ArticleTitle>

          <ArticleBtn>
            <Button title="Zobacz" to={node.fields.slug} />
          </ArticleBtn>
        </ArticleContainer>
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
            image
          }
          html
          fields {
            slug
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
