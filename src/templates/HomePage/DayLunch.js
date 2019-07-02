import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SectionHeader from 'components/SectionHeader';
import Letter from 'components/Letter';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { theme } from 'assets/styles/theme';

const StyledWrapper = styled.section`
  position: relative;
  &:after {
    content: '';
    background-image: url(${({ cupCircle }) =>
      '' + cupCircle + '' ? cupCircle : ''});
    width: 35rem;
    height: 35rem;
    position: absolute;
    top: -13rem;
    left: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const StyledMealsSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const MealWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto 3rem auto;

  ${theme.mq.phone} {
    width: 50%;
    margin: 3rem auto;
    min-height: 150px;

    &:nth-child(even) {
      border-left: 1px solid black;
    }
  }
`;

const MealTitle = styled.h3`
  font-size: 1.8rem;
  padding: 0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin: 0 0 2rem;

  ${theme.mq.phone} {
    margin: 0 0 3rem;
  }
`;

const MealPrice = styled.p`
  font-weight: bold;
`;

const MealList = styled(ReactMarkdown)`
  ul {
    list-style: square inside
      url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==');
    padding: 0;
    margin: 0;

    li {
      padding-bottom: 1rem;
    }
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cupCircle: file(relativePath: { eq: "cup-circles/cup-circle-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        letterL: file(relativePath: { eq: "background-letter-l.jpg" }) {
          childImageSharp {
            fixed(width: 220, height: 290) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        dayLunches: allStrapiLunch(filter: { active: { eq: 1 } }) {
          nodes {
            title
            content
            date
            price
            active
            strapiId
          }
        }
      }
    `}
    render={data => (
      <>
        {data.dayLunches.nodes.length > 0 ? (
          <StyledWrapper cupCircle={data.cupCircle.childImageSharp.fluid.src}>
            <Letter
              letter="L"
              background={data.letterL.childImageSharp.fixed.src}
              top={-17}
              left={-15}
            />

            <SectionHeader title="Lunch dnia" />

            <StyledMealsSection>
              {data.dayLunches.nodes.map(item => (
                <MealWrapper key={item.strapiId}>
                  <MealTitle>{item.title}</MealTitle>
                  <MealList source={item.content} />
                  <MealPrice>{item.price}</MealPrice>
                </MealWrapper>
              ))}
            </StyledMealsSection>
          </StyledWrapper>
        ) : (
          ''
        )}
      </>
    )}
  />
);
