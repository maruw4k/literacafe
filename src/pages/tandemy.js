import React from 'react';
import { graphql } from 'gatsby';
import Hero from 'components/Hero';
import MainTemplate from 'templates/Main/MainTemplate';
import SectionHeader from 'components/SectionHeader';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px 50px 15px;
`;

const StyledPriceTable = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    text-transform: uppercase;
    display: flex;
    padding-bottom: 2rem;
    justify-content: space-between;

    span {
      font-weight: bold;
      text-transform: none;
    }
  }
`;

export default ({ data }) => {
  return (
    <MainTemplate>
      <Hero
        fluid={data.mainHeroImg.childImageSharp.fluid}
        height="55vh"
        position="top"
        text="Wypożyczamy tandemy"
      />

      <StyledWrapper>
        <SectionHeader title="Byle do przodu" />

        <p>
          Nawiązaliśmy współpracę z wypożyczalnią tandemów “Byle do Przodu”.
          Zachęcamy do aktywnego wypoczynku i przejażdżek w towarzystwie!
          Rezerwacje można składać:
        </p>

        <ul>
          <li>
            telefonicznie - <a href="tel:508223057">508 223 057</a>
          </li>
          <li>
            mailowo na
            <a href="mailto:kontakt@byledoprzodu.pl">kontakt@byledoprzodu.pl</a>
          </li>
          <li>lub bezpośrednio w lokalu.</li>
        </ul>

        <SectionHeader title="Cennik" />

        <StyledPriceTable>
          <li>
            1 godzina <span>15zł</span>
          </li>
          <li>
            każda następna <span>10zł</span>
          </li>
          <li>
            dzień <span>60zł</span>
          </li>
          <li>
            doba <span>70zł</span>
          </li>
        </StyledPriceTable>
      </StyledWrapper>
    </MainTemplate>
  );
};

export const query = graphql`
  {
    mainHeroImg: file(relativePath: { eq: "tandemy-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
