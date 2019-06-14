import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SectionHeader from 'components/SectionHeader';
import Letter from 'components/Letter';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const lunch = [
  {
    id: 1,
    title: 'Francuski',
    elements: ['zupa brokułowa', 'herbata', 'ciastko', 'kotlet'],
    price: '26zł',
  },
  {
    id: 2,
    title: 'Amerykański',
    elements: ['Pizza', 'kawa', 'pancake'],
    price: '18zł',
  },
];

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
  display: grid;
  grid-template-columns: 2fr 0.2fr 2fr;
  grid-template-rows: 0.6fr 1fr 0.5fr;
  grid-template-areas: 'left-title . right-title' 'left-content divider right-content' 'left-price . right-price';

  ${theme.mq.tablet} {
    grid-template-columns: 2fr 1fr 2fr;
  }
  margin: 0 auto;
  max-width: 900px;
  overflow: hidden;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const StyledTitle = styled.div`
  padding: 0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const StyledLeftTitle = styled(StyledTitle)`
  grid-area: left-title;
`;

const StyledRightTitle = styled(StyledTitle)`
  grid-area: right-title;
`;

const MealList = styled.ul`
  list-style: square inside
    url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==');
  padding: 0;
  margin: 0;

  li {
    padding-bottom: 1rem;
  }
`;

const StyledLeftMeals = styled.div`
  grid-area: left-content;
  padding: 0;
`;

const StyledRightMeals = styled.div`
  grid-area: right-content;
  padding: 0;
`;

const StyledRightPrice = styled.div`
  grid-area: right-price;
  font-weight: bold;
`;

const StyledLeftPrice = styled.div`
  grid-area: left-price;
  font-weight: bold;
`;

const StyledDivider = styled.div`
  grid-area: divider;
  position: relative;

  &:after {
    content: '';
    width: 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    background: black;
    z-index: 1;
    transform: translate(-50%, -50%);
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cupCircle: file(relativePath: { eq: "cup-circle-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        backgroundLetter: file(relativePath: { eq: "background-letter-l.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWrapper cupCircle={data.cupCircle.childImageSharp.fluid.src}>

        <Letter
          letter="L"
          background={data.backgroundLetter.childImageSharp.fluid.src}
          top={-17}
          left={-15}
        />

        <SectionHeader title="Lunch dnia" />

        <StyledMealsSection>
          <StyledLeftTitle>{lunch[0].title}</StyledLeftTitle>
          <StyledRightTitle>{lunch[1].title}</StyledRightTitle>

          <StyledLeftMeals>
            <MealList>
              {lunch[0].elements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </MealList>
          </StyledLeftMeals>

          <StyledLeftPrice>{lunch[0].price}</StyledLeftPrice>

          <StyledRightMeals>
            <MealList>
              {lunch[1].elements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </MealList>
          </StyledRightMeals>

          <StyledRightPrice>{lunch[1].price}</StyledRightPrice>

          <StyledDivider />
        </StyledMealsSection>
      </StyledWrapper>
    )}
  />
);
