import React from 'react';
import styled from 'styled-components';
import image1 from 'assets/images/cup-circle-1.png'
import 'templates/day-lunch.css'

const lunch = [
  {
    id: 1,
    title: 'Francuski',
    elements: ['zupa brokułowa', 'herbata', 'ciastko'],
    price: '26zł'
  },
  {
    id: 2,
    title: 'Amerykański',
    elements: ['Pizza', 'kawa', 'pancake'],
    price: '18zł'
  },
];

const StyledWrapper = styled.div`
  padding-top: 12rem;
  padding-bottom: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const StyledHeading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1rem;
  
  &:after {
  content: '';
  background-image: url(${image1});
  width: 40rem;
  height: 40rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  }
`;

const DayLunch = () => (
  <StyledWrapper className="container">

    <section className="lunch grid-container">
      <div className="header">
        <StyledHeading>Lunch dnia</StyledHeading>
      </div>
      <div className="left-content">
        {lunch[0].elements.forEach((element) => {
        console.log(element)
      })}
      </div>
      <div className="right-content">
        {lunch[1].elements.forEach((element) => {
          console.log(element)
        })}
      </div>
      <div className="left-price">
        {lunch[0].price}
      </div>
      <div className="right-price">
        {lunch[1].price}
      </div>
      <div className="divider">
        divider
      </div>
      <div className="left-title">
        {lunch[0].title}
      </div>
      <div className="right-title">
        {lunch[1].title}
      </div>
    </section>

  </StyledWrapper>
);

export default DayLunch;
