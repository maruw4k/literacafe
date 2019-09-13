import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from 'assets/images/logo.svg';
import { theme } from 'assets/styles/theme';

const FooterWrapper = styled.div`
  background-color: black;
`;

const Footer = styled.footer`
  min-height: 180px;
  font-size: 1.5rem;
  text-align: center;
  color: white;
  display: grid;
  padding-top: 10px;

  .footer-element__link {
    color: white;
  }

  .footer-element {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    flex-direction: column;
    line-height: 1.5;
  }

  .footer-element__title {
    font-weight: bold;
    margin: 0;
    text-align: left;
  }

  .logo {
    grid-area: logo;
  }

  .copyright-left {
    grid-area: copyright-left;

    ${theme.mq.tablet} {
      margin-right: 10rem;
    }
  }

  .copyright-right {
    grid-area: copyright-right;
  }

  .address {
    grid-area: address;
    font-style: normal;
  }

  .hours {
    grid-area: hours;
    padding-right: 8vh;

    ${theme.mq.tablet} {
      padding-right: 0;
    }
  }

  grid-template-columns: 1fr;
  grid-template-rows: 3fr 2fr 4fr 0.5fr 0.5fr;
  padding-bottom: 2rem;
  grid-template-areas: 'logo' 'address' 'hours' 'copyright-left' 'copyright-right';

  ${theme.mq.tablet} {
    padding-top: 4rem;
    padding-bottom: 0;
    grid-template-columns: 1fr 1fr 0.5fr 0.5fr 0.5fr 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 1fr 1fr;
    grid-template-areas: '. . logo logo logo . .' 'address address . . . hours hours' 'address address . . . hours hours' 'copyright-left copyright-left . . . copyright-right copyright-right';
  }
`;

const LogoWrapper = styled(Link)`
  display: block;
  width: 138px;
  height: auto;
  margin: 0 auto;
`;

export default () => (
  <FooterWrapper>
    <Footer className="container">
      <div className="footer-element copyright-left">© LiteraCafe 2019</div>
      <div className="footer-element copyright-right">
        <div>
          Created by{' '}
          <a
            href="https://alterpage.pl/"
            className="footer-element__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            AlterPage
          </a>
        </div>
      </div>
      <address className="footer-element address">
        <div>
          <div className="footer-element__title">Adres:</div>
          Literacka 19, 01-864 Warszawa
          <div>
            Mail:{' '}
            <a
              href="mailto:litera.cafe19@gmail.com"
              className="footer-element__link"
            >
              {' '}
              litera.cafe19@gmail.com
            </a>
          </div>
          <div>
            Tel:{' '}
            <a href="tel:606120727" className="footer-element__link">
              606 120 727
            </a>
            ,
            <a href="tel:501167463" className="footer-element__link">
              {' '}
              501 167 463
            </a>
          </div>
        </div>
      </address>
      <div className="footer-element hours">
        <div>
          <div className="footer-element__title">Czynne:</div>
          pon. - czw. 8:00 - 21:00
          <br />
          piątek 8:00 - 22:00
          <br />
          sobota 10:00 - 22:00
          <br />
          niedziela 10:00 - 20:00
        </div>
      </div>
      <div className="footer-element logo">
        <LogoWrapper to='/'>
          <img src={logo} width="127" height="81" alt="Litera Cafe"/>
        </LogoWrapper>
      </div>
    </Footer>
  </FooterWrapper>
);
