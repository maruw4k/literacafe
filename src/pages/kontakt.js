import React from 'react';
import { graphql } from 'gatsby';
import MainTemplate from 'templates/Main/MainTemplate';
import HeroImage from 'components/HeroImage';
import SectionHeader from 'components/SectionHeader';
import Map from 'components/Map';
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
      <HeroImage
        fileName={data.mainHeroImg.childImageSharp.fluid.src}
        minHeight="50vh"
        opacity={0.2}
        text="Kontakt"
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
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
