import React from 'react';
import SectionHeader from 'components/SectionHeader';
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

const StyledCategoryPhoto = styled.img`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    position: sticky;
    margin-top: 150px;
    top: 30px;
    height: auto;
    width: 20%;
    float: right;
  }

  ${theme.mq.desktop} {
    width: 15%;
  }

  ${theme.mq.huge} {
    margin-right: 10%;
    max-width: 220px;
  }
`;

const StyledCategoryTitle = styled(SectionHeader)`
  margin-bottom: 1rem;
`;

const StyledSubTitle = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledMeal = styled.div`
  text-transform: uppercase;
  position: relative;
  margin: 0 auto 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMealContainer = styled.div`
  padding: 0 15px;
  margin: 0 auto 100px auto;
  max-width: 400px;

  ${theme.mq.desktop} {
    max-width: 600px;
  }
`;

const StyledMealName = styled.div`
  text-align: left;
  padding-right: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 0;
  }
  p:nth-child(2) {
    color: grey;
    font-size: 0.8em;
  }
`;

const StyledMealPrice = styled.span`
  font-weight: bold;
`;

export default ({ meals }) => (
  <>
    {meals.map((item, index) => (
      <div key={index}>
        <StyledCategoryPhoto src={item.img} alt={item.category + 'photo'} />

        <StyledMealContainer id={'category' + index}>
          <StyledCategoryTitle title={item.category} />

          {item.subcategories.map((sub, index) => (
            <div key={index}>
              <StyledSubTitle>{sub.name}</StyledSubTitle>
              {sub.meals.map((meal, index) => (
                <StyledMeal key={index}>
                  <StyledMealName>
                    <p>{meal.name}</p>
                    <p>{meal.subname}</p>
                  </StyledMealName>

                  <StyledMealPrice>{meal.price}</StyledMealPrice>
                </StyledMeal>
              ))}
            </div>
          ))}
        </StyledMealContainer>
      </div>
    ))}
  </>
);
