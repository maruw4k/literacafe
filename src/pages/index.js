import React from 'react';
import HeroImage from 'components/HeroImage';
import MainTemplate from 'templates/MainTemplate';
import DayLunch from 'templates/DayLunch';

const IndexPage = () => (
  <MainTemplate>
    <HeroImage
      fileName="news-main-photo"
      min-height="75vh"
      text="We believe a cup of coffee is one of the most important, simple
          pleasures in life"
    />
    <DayLunch />
  </MainTemplate>
);

export default IndexPage;
