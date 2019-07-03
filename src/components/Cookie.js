import React from 'react';
import styled from 'styled-components';
import cookiesImg from 'assets/images/cookies.png';
import { theme } from 'assets/styles/theme';

const FooterContainer = styled.section`
  display: ${({ isCookieSet }) => (isCookieSet ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  font-size: 1.4rem;
  padding: 0.5rem 0.7rem;
  border-top: 1px solid #464646;

  ${theme.mq.tablet} {
    padding: 1.5rem 0.5rem;
  }
`;

const CookieButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;

  img {
    margin-bottom: 0.5rem;
    width: 55px;
    height: auto;

    ${theme.mq.tablet} {
      width: 78px;
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;

const CookieText = styled.div`
  padding-right: 1.5rem;
  max-width: 600px;

  h4,
  p {
    margin: 0;
  }

  a {
    color: white;
    text-decoration: underline;
  }
`;

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      expiresIn: 365,
      cookieSet: false,
    };
  }

  checkCookie = () => {
    let cookie = this.getCookie();
    if (cookie !== '') {
      this.setState({ cookieSet: true });
    }
  };

  setCookie = () => {
    let d = new Date();
    d.setTime(d.getTime() + this.state.expiresIn * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = 'cookies=1; ' + expires;
  };

  getCookie = () => {
    let name = 'cookies=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return '';
  };

  closeMessage = evt => {
    evt.preventDefault();
    this.setState({ cookieSet: true });
    this.setCookie();
  };

  componentDidMount() {
    this.checkCookie();
  }

  render() {
    return (
      <FooterContainer isCookieSet={this.state.cookieSet}>
        <CookieText>
          <h4>Ta strona używa cookie.</h4>
          <p>
            Korzystając z niej wyrażasz zgodę na ich używanie, zgodnie z
            aktualnymi ustawieniami przeglądarki.
          </p>

          <a href="#" target="_blank">
            Więcej szczegółów w naszej Polityce Cookies
          </a>
        </CookieText>

        <CookieButton onClick={this.closeMessage}>
          <img src={cookiesImg} alt="" />
          Akceptuję politykę cookies
        </CookieButton>
      </FooterContainer>
    );
  }
}
