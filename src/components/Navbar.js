import React from 'react';
import { Link } from 'gatsby';
import Hamburger from 'components/Hamburger';
import Image from 'components/Image';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const Navbar = styled.nav`
  font-family: ${theme.font.family.nav};
  background-color: black;
  height: 80px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0);' : 'translateY(-150px);'};
  transition: transform 300ms;

  &::before {
    content: '';
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0);' : 'translateY(-1000px);'};
    position: fixed;
    background-color: black;
    opacity: ${({ isOpen }) => (isOpen ? '0.4' : '0')};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    transition: opacity 300ms;
  }

  ${theme.mq.tablet} {
    height: 13rem;

    &::before {
      display: none;
    }
  }
`;

const NavBarMenu = styled.div`
  padding-bottom: 2rem;
  background-color: black;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-1000px)'};
  transition: transform 300ms;

  ${theme.mq.tablet} {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    align-items: center;
    height: 100%;
    padding-bottom: 0;
    max-width: 950px;
    transform: translateY(0);
  }
`;

const LogoWrapper = styled.div`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    height: auto;
    margin: 0 4vw;
    width: 138px;
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  ${theme.mq.tablet} {
    display: none;
  }
`;

const MobileLogoWrapper = styled.div`
  height: 100%;
  width: 9rem;
  position: relative;
  z-index: 99;
  ${theme.mq.tablet} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  color: white;
  text-decoration: none;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  text-align: center;
  position: relative;
  font-size: 1.7rem;
  z-index: 1;
  overflow: hidden;
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
  }

  ${theme.mq.tablet} {
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 100%;
      right: 100%;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      background-color: white;
      transform-origin: center;
      transform: translate(50%, -50%) scale(0);
      transition: transform 0.35s ease-in-out;
    }

    &:hover {
      text-decoration: none;
      background-color: initial;
      color: black;
      &::before {
        transform: translate(50%, -50%) scale(15);
      }
    }
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isVisible: true,
      prevScrollPos: 0,
    };
  }

  toggleHamburger = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  toggleFixedMenu = () => {
    const { prevScrollPos } = this.state;
    let currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 80;

    this.setState({
      prevScrollPos: currentScrollPos,
      isVisible: visible,
      isOpen: false,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.toggleFixedMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleFixedMenu);
  }

  render() {
    return (
      <Navbar
        role="navigation"
        aria-label="main-navigation"
        className="navigation"
        isVisible={this.state.isVisible}
        isOpen={this.state.isOpen}
      >
        <MobileNavHeader>
          <MobileLogoWrapper>
            <Link to="/">
              <Image filename="logo.png" alt="Logo LiteraCafe" />
            </Link>
          </MobileLogoWrapper>

          <Hamburger
            onClick={this.toggleHamburger}
            isOpen={this.state.isOpen}
          />
        </MobileNavHeader>

        <NavBarMenu isOpen={this.state.isOpen} isVisible={this.state.isVisible}>
          <StyledLink to="/">Start</StyledLink>
          <StyledLink to="/menu">Menu</StyledLink>
          <StyledLink to="/wydarzenia">Wydarzenia</StyledLink>

          <LogoWrapper className="logo-wrapper">
            <Link to="/">
              <Image filename="logo.png" />
            </Link>
          </LogoWrapper>

          <StyledLink to="/o-nas">O nas</StyledLink>
          <StyledLink to="/tandemy">Tandemy</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
        </NavBarMenu>
      </Navbar>
    );
  }
}
