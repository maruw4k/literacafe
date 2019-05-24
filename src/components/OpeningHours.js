import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledOpeningHoursWrapper = styled.section`
  font-family: ${theme.font.family.nav};
  font-size: 1.35rem;
  height: 90px;
  background-color: black;
  color: white;
  ${theme.mq.tablet} {
    height: 50px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;

const StyledOpeningHours = styled.div`
  display: grid;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'first first second second' 'third third fourth fourth';

  ${theme.mq.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'first second third fourth';
  }
`;

const StyledHours = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  ${theme.mq.tablet} {
    border: none;
  }
`;

const StyledFirstHours = styled(StyledHours)`
  grid-area: first;
  ${theme.mq.tablet} {
    border-right: 1px solid white;
  }
`;

const StyledSecondHours = styled(StyledHours)`
  grid-area: second;
  border-left: none;
  ${theme.mq.tablet} {
    border-right: 1px solid white;
  }
`;

const StyledThirdHours = styled(StyledHours)`
  grid-area: third;
  border-top: none;
  ${theme.mq.tablet} {
    border-right: 1px solid white;
  }
`;

const StyledFourthHours = styled(StyledHours)`
  grid-area: fourth;
  border-top: none;
  border-left: none;
`;

export default () => (
  <StyledOpeningHoursWrapper>
    <StyledOpeningHours>
      <StyledFirstHours>pon. - czw. 8:00 - 21:00</StyledFirstHours>
      <StyledSecondHours>piątek 8:00 - 22:00</StyledSecondHours>
      <StyledThirdHours>sobota 10:00 - 22:00</StyledThirdHours>
      <StyledFourthHours>niedziela 10:00 - 20:00</StyledFourthHours>
    </StyledOpeningHours>
  </StyledOpeningHoursWrapper>
);
