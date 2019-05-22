import React from 'react';
import styled from 'styled-components';
import Image from 'components/Image';
import { theme } from 'assets/styles/theme';
import 'components/footer.css';

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

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 2fr 0.2fr 0.5fr;
  grid-template-areas: '. . logo logo logo . .' '. address address address address address .' '. hours hours hours hours hours . ' '. . copyright-left copyright-left copyright-left . .' '. . copyright-right copyright-right copyright-right . .';

  ${theme.mq.tablet} {
    padding-top: 40px;
    grid-template-columns: 1fr 1fr 0.5fr 0.5fr 0.5fr 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 1fr 1fr;
    grid-template-areas: '. . logo logo logo . .' 'address address . . . hours hours' 'address address . . . hours hours' 'copyright-left copyright-left . . . copyright-right copyright-right';
  }
`;

const LogoWrapper = styled.div`
  display: block;
  width: 138px;
  height: auto;
  margin: 0 auto;
`;

export default () => (
  <FooterWrapper>
    <Footer className="container">
      <div className="footer-element copyright-left">©LiteraCafe 2019</div>
      <div className="footer-element copyright-right">
        <div>
          Created by <a href="https://alterpage.pl/">AlterPage</a>
        </div>
      </div>
      <address className="footer-element address">
        <div>
          <div className="footer-element__title">Adres:</div>
          Literacka 19, 01-864 Warszawa
          <div>
            Mail:
            <a href="mailto:litera.cafe19@gmail.com">litera.cafe19@gmail.com</a>
          </div>
          <div>
            Tel: <a href="tel:606120727">606 120 727</a>,
            <a href="tel:501167463">501 167 463</a>
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
          sobota 10:00 - 20:22
          <br />
          niedziela 10:00 - 20:00
        </div>
      </div>
      <div className="footer-element logo">
        <LogoWrapper>
          <Image filename="logo.png" />
        </LogoWrapper>
      </div>
    </Footer>
  </FooterWrapper>
);
