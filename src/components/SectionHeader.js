import React from 'react';
import styled from 'styled-components';
import apostrophes from 'assets/images/apostrophes.png';

const StyledWrapper = styled.div`
  margin-top: 12rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const StyledHeading = styled.h2`
  font-family: 'Unna', serif;
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
