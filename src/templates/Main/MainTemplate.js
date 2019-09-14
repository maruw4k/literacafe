import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import Cookie from 'components/Cookie';
import Footer from 'components/Footer';
import OpeningHours from 'components/OpeningHours'
import GlobalStyle from 'assets/styles/GlobalStyle';
import useSiteMetadata from 'components/SiteMetadata';
import coverImage from 'assets/images/cover-image.jpg';
import 'assets/styles/normalize.css';

const MainTemplate = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="twitter:card" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={coverImage} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={coverImage} />

        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400|Unna:400,700&display=swap&subset=latin-ext" rel="stylesheet"/>
      </Helmet>

      <GlobalStyle />
      <Navbar />
      <OpeningHours />
      {children}
      <Cookie />
      <Footer />
    </>
  );
};

export default MainTemplate;
