import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';
import apostrophes from 'assets/images/apostrophes.png';

const StyledWrapper = styled.div`
  padding-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;

  ${theme.mq.tablet} {
    margin-top: 5rem;
  }
`;

const StyledHeading = styled.h2`
  font-family: ${theme.font.family.title};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 3rem;
  position: relative;
`;

const SectionHeader = props => {
  return (
    <StyledWrapper>
      <img src={apostrophes} alt="" />
      <StyledHeading>{props.title}</StyledHeading>
    </StyledWrapper>
  );
};

export default SectionHeader;
