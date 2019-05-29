import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MainTemplate from 'templates/MainTemplate';
import HeroImage from 'components/HeroImage';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader';
import { theme } from 'assets/styles/theme';

const StyledContainer = styled.div`
  margin-left: ${({ right }) => (right ? '0' : 'auto')};
  margin-right: auto;
  max-width: 1100px;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  padding-bottom: ${props => props.paddingBottom};
  &:after {
    content: '';
    background-image: url(${({ cupCircle }) =>
  '' + cupCircle + '' ? cupCircle : ''});
    width: 35rem;
    height: 35rem;
    position: absolute;
    top: -30rem;
    left: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const PhotoContainer = styled.div`
  margin-left: ${({ right }) => (right ? 'auto' : '0')};
  ${({ center }) => (center ? 'margin: 0 auto;' : '')};
  padding-bottom: 4rem;
  max-width: 1500px;
`;

const StyledParagraph = styled.p`
  margin-left: ${({ right }) => (right ? '0' : 'auto')};
  max-width: 500px;
`;

const SignatureContainer = styled.div`
  text-align: center;
  padding-bottom: 4rem;

  ${theme.mq.tablet} {
    text-align: right;
  }
`;

const NewsPage = data => (
  <MainTemplate>
    <HeroImage
      fileName={data.data.mainHeroImg.childImageSharp.fluid.src}
      mihHeight="40vh"
      opacity={0.2}
      text="L I T E R A  &nbsp; C A F E"
    />

    <div style={{ overflow: 'hidden' }}>
      <SectionHeader title="Poznaj to miejsce" />

      <StyledContainer paddingBottom="4rem" cupCircle={data.data.cupCircle.childImageSharp.fluid.src}>
        <StyledParagraph right>
          LiteraCafe to kawiarnia zlokalizowana przy ulicy Literackiej, na
          warszawskich Bielanach. Przyjazne wszystkim miejsce spotkań przy
          pysznej kawie, doskonałych ciastach. Tu, codziennie rano będziecie
          mogli Państwo kupić świeże bułeczki, croissanty, pieczywo jasne i
          ciemne, z ziarnami i bez!
        </StyledParagraph>
      </StyledContainer>

      <PhotoContainer right>
        <Img fluid={data.data.photo1.childImageSharp.fluid} />
      </PhotoContainer>

      <StyledContainer paddingBottom="4rem">
        <StyledParagraph>
          W naszej kawiarni znajdą Państwo wiele książek, które można czytać na
          miejscu delektując się kawą lub „wypożyczyć”, ale nie jak w zwykłej
          bibliotece. Żadnych kart i formalności! Wystarczy wziąć książkę z
          półki a po jej przeczytaniu, to Państwo decydują czy oddać tę samą czy
          przynieść inną. Do dyspozycji naszych Gości mamy gry planszowe zarówno
          klasyczne jak i nowości, więc zapraszamy do…. grywalizacji !!!
        </StyledParagraph>
      </StyledContainer>

      <StyledContainer>
        <PhotoContainer center>
          <Img fluid={data.data.photo2.childImageSharp.fluid} />
        </PhotoContainer>
      </StyledContainer>

      <StyledContainer paddingBottom="4rem">
        <StyledParagraph right>
          LiteraCafe to, także strefa sportowa. Wiosna i lato to świetna pora na
          aktywne spędzanie czasu, a że we dwoje zawsze raźniej możecie u nas
          wypożyczyć tandemy. Litera Cafe i Bielany to świetny początek udanej
          wycieczki rowerowej. W trakcie całego roku zapraszamy do wspólnego
          oglądania meczów. Już wkrótce aktualny kalendarz spotkań.
        </StyledParagraph>
      </StyledContainer>

      <PhotoContainer>
        <Img fluid={data.data.photo3.childImageSharp.fluid} />
      </PhotoContainer>

      <StyledContainer paddingBottom="4rem">
        <StyledParagraph>
          LiteraCafe to także, miejsce spotkań tematycznych z podróżnikami,
          artystami. Jeśli chcesz się podzielić z innymi swoją pasją –
          zapraszamy do kontaktu! LiteraCafe to po prostu przestrzeń Twojego
          relaksu.
        </StyledParagraph>
      </StyledContainer>

      <StyledContainer>
        <SignatureContainer>
          <Img fixed={data.data.signature.childImageSharp.fixed} />
        </SignatureContainer>
      </StyledContainer>
    </div>
  </MainTemplate>
);

export default NewsPage;

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
        }
      }
    }
    cupCircle: file(relativePath: { eq: "cup-circle-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mainHeroImg: file(relativePath: { eq: "about-main-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5375, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    photo1: file(relativePath: { eq: "about-photo1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1523, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    photo2: file(relativePath: { eq: "about-photo2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1100, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    photo3: file(relativePath: { eq: "about-photo3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1523, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    signature: file(relativePath: { eq: "signature.png" }) {
      childImageSharp {
        fixed(width: 169, height: 51) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
