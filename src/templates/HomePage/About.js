import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader';
import Button from 'components/Button';
import { theme } from 'assets/styles/theme';
import Letter from 'components/Letter';

const StyledWrapper = styled.section`
  position: relative;

  &:after {
    content: '';
    background-image: url(${({ cupCircle }) => (cupCircle ? cupCircle : '')});
    width: 35rem;
    height: 35rem;
    position: absolute;
    bottom: 70%;
    left: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.7fr;
  grid-template-areas: 'first-text first-text' 'second-text second-text' 'button button';
  height: auto;

  ${theme.mq.tablet} {
    height: 320px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'first-text second-text' 'button button';
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: button;
`;

const StyledFirstTextContainer = styled.div`
  grid-area: first-text;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;

  p {
    margin: 0 0 2rem 0;
  }
`;

const StyledSecondTextContainer = styled.div`
  grid-area: second-text;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;

  p {
    margin: 0 0 2rem 0;
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        cupCircle: file(relativePath: { eq: "cup-circles/cup-circle-4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        letterO: file(relativePath: { eq: "background-letter-l.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWrapper cupCircle={data.cupCircle.childImageSharp.fluid.src}>
        <Letter
          letter="O"
          background={data.letterO.childImageSharp.fixed.src}
          top={-12}
          right={-15}
        />

        <SectionHeader title="O literze" />

        <StyledContent>
          <StyledFirstTextContainer>{props.text1}</StyledFirstTextContainer>

          <StyledSecondTextContainer>{props.text2}</StyledSecondTextContainer>

          <StyledButtonContainer>
            <Button title="Zobacz" to="o-nas" />
          </StyledButtonContainer>
        </StyledContent>
      </StyledWrapper>
    )}
  />
);
