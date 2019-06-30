import React from 'react';
import { graphql } from 'gatsby';
import SectionHeader from 'components/SectionHeader';
import Map from 'components/Map';
import Hero from 'components/Hero';
import MainTemplate from 'templates/Main/MainTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 0 15px 50px 15px;
`;

const center = { lat: 52.267164, lng: 20.948894 };
const mapProps = {
  options: {
    center,
    zoom: 17,
  },
  onMount: map => {
    new window.google.maps.Marker({
      position: center,
      map,
      title: 'LiteraCafe',
    });
  },
};

export default ({ data }) => {
  return (
    <MainTemplate>
      <Hero
        fluid={data.mainHeroImg.childImageSharp.fluid}
        height="50vh"
        text="Kontakt"
        opacity={0.2}
      />

      <StyledWrapper>
        <SectionHeader title="Dane firmy" />

        <p>
          LiteraCafe S.C. <br />
          Sylwia Myszak, Małgorzata Sobieszczak-Marciniak <br />
          01-864 Warszawa, Literacka 19 lok. LU2 <br />
          NIP: 118 211 46 31 <br />
        </p>

        <p>
          tel: <a href="tel:606120727">606 120 727</a>,
          <a href="tel:501167463"> 501 167 463</a> <br />
          mail:
          <a href="mailto:litera.cafe19@gmail.com"> litera.cafe19@gmail.com</a>
        </p>
      </StyledWrapper>

      <Map id="contactMap" {...mapProps} />
    </MainTemplate>
  );
};

export const query = graphql`
  {
    mainHeroImg: file(relativePath: { eq: "contact-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
