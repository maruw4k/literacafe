import React from 'react';
import SectionHeader from 'components/SectionHeader';
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

const StyledCategoryImg = styled.img`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    position: sticky;
    margin-top: 150px;
    top: 140px;
    height: auto;
    width: 20%;
    float: right;
    z-index: -1;
  }

  ${theme.mq.desktop} {
    width: 15%;
  }

  ${theme.mq.huge} {
    margin-right: 10%;
    max-width: 220px;
  }
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin-bottom: 1rem;
`;

const SubTitle = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const MealContainer = styled.div`
  padding: 0 15px;
  margin: 0 auto 100px auto;
  max-width: 400px;

  ${theme.mq.desktop} {
    max-width: 600px;
  }
`;

const Meal = styled.div`
  text-transform: uppercase;
  position: relative;
  margin: 0 auto 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MealName = styled.div`
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

const MealPrice = styled.span`
  font-weight: bold;
`;

export default ({ groupedMeals }) => (
  <>
    {groupedMeals.map((item, index) => (
      <div key={index}>
        {item.photo !== null ? (
          <StyledCategoryImg
            src={item.photo.childImageSharp.fixed.src}
            alt={item.category + 'photo'}
          />
        ) : ''}

        <MealContainer id={item.id}>
          <StyledSectionHeader title={item.categoryName} />

          {item.subcategories.map((sub, index) => (
            <div key={index}>
              <SubTitle>{sub.node.name}</SubTitle>

              {sub.node.meals.map((meal, index) => (
                <Meal key={index}>
                  <MealName>
                    <p>{meal.node.name}</p>
                    <p>{meal.node.additional_info}</p>
                  </MealName>
                  <MealPrice>{meal.node.price}</MealPrice>
                </Meal>
              ))}
            </div>
          ))}
        </MealContainer>
      </div>
    ))}
  </>
);
