import React from 'react';
import styled from 'styled-components';
import image1 from 'assets/images/cup-circle-1.png';
import apostrophes from 'assets/images/apostrophes.png';
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
  display: grid;
  grid-template-columns: 2fr 0.2fr 2fr;
  grid-template-rows: 1fr 0.6fr 1fr 0.5fr;
  grid-template-areas: 'header header header' 'left-title . right-title' 'left-content divider right-content' 'left-price . right-price';

  ${theme.mq.tablet} {
    grid-template-columns: 2fr 1fr 2fr;
  }
  padding-top: 12rem;
  padding-bottom: 15rem;
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

const StyledHeading = styled.h2`
  font-family: 'Unna', serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  position: relative;

  &:after {
    content: '';
    background-image: url(${image1});
    width: 35rem;
    height: 35rem;
    position: absolute;
    bottom: -5rem;
    left: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const StyledHeader = styled.div`
  grid-area: header;
  flex-direction: column;
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

const DayLunch = () => (
  <div className="container">
    <StyledWrapper>
      <StyledHeader>
        <img src={apostrophes} alt="" />
        <StyledHeading>Lunch dnia</StyledHeading>
      </StyledHeader>

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
    </StyledWrapper>
  </div>
);

export default DayLunch;
