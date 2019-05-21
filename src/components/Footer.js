import React from 'react';
import styled from 'styled-components';
import Image from 'components/Image';
import 'components/footer.css';

const FooterWrapper = styled.div`
  background-color: black;
`;

const Footer = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 200px;
  padding: 40px;
  text-align: center;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: '. . logo logo logo . .' 'address address . . . hours hours' 'address address . . . hours hours' 'copyright-left copyright-left . . . copyright-right copyright-right';
`;

const LogoWrapper = styled.div`
  display: block;
  width: 138px;
  height: auto;
  margin: 0 auto;
`;

export default () => (
  <FooterWrapper>
    <Footer>
      <div className="footer-element copyright-left">©LiteraCafe 2018</div>
      <div className="footer-element copyright-right">Created by AlterPage</div>
      <div className="footer-element address">
        Adres: Literacka 19 <br /> 01-864 Warszawa <br />
        Mail: litera.cafe19@gmail.com <br />
        Tel:606 120 727, 501 167 463
      </div>
      <div className="footer-element hours">
        Czynne: <br />
        pon. - czw. 8:00 - 21:00
        <br />
        piątek <br />
        sobota
      </div>
      <div className="footer-element logo">
        <LogoWrapper>
          <Image filename="logo.png" />
        </LogoWrapper>
      </div>
    </Footer>
  </FooterWrapper>
);
