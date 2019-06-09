import React from 'react';
import SectionHeader from 'components/SectionHeader';
import Img from 'gatsby-image';
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

const StyledCategoryPhoto = styled(Img)`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    position: sticky;
    margin-top: 150px;
    top: 30px;
    height: 330px;
    width: 220px;
    right: 2vw;
    float: right;
  }

  ${theme.mq.desktop} {
    right: 13vw;
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

export default ({ groupedMeals }) => (
  <>
    {groupedMeals.map((item, index) => (
      <div key={index}>
        {item.photo ? (
          <StyledCategoryPhoto
            fixed={item.photo.childImageSharp.fixed}
            alt={item.category + 'photo'}
          />
        ) : (
          ''
        )}

        <StyledMealContainer id={item.id}>
          <StyledCategoryTitle title={item.categoryName} />

          {item.subcategories.map((sub, index) => (
            <div key={index}>
              <StyledSubTitle>{sub.node.name}</StyledSubTitle>

              {sub.node.meals.map((meal, index) => (
                <StyledMeal key={index}>
                  <StyledMealName>
                    <p>{meal.node.name}</p>
                    <p>{meal.node.subname}</p>
                  </StyledMealName>

                  <StyledMealPrice>{meal.node.price}</StyledMealPrice>
                </StyledMeal>
              ))}
            </div>
          ))}
        </StyledMealContainer>
      </div>
    ))}
  </>
);
