import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import OpeningHours from 'components/OpeningHours'
import GlobalStyle from 'assets/styles/GlobalStyle';
import useSiteMetadata from 'components/SiteMetadata';
import 'assets/styles/normalize.css';

const MainTemplate = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta property="description" content={description} />

        <meta property="twitter:card" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/img/og-image.jpg" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>

      <GlobalStyle />
      <Navbar />
      <OpeningHours />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
