import React from 'react';
import { Link } from 'gatsby';
import Hamburger from 'components/Hamburger';
import Image from 'components/Image';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledNavbar = styled.nav`
  font-family: ${theme.font.family.nav};
  background-color: black;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  ${theme.mq.tablet} {
    height: 13rem;
    //position: relative;
  }
`;

const NavBarMenu = styled.div`
  padding-bottom: 2rem;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  ${theme.mq.tablet} {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    align-items: center;
    height: 100%;
    padding-bottom: 0;
    max-width: 950px;
  }
`;

const LogoWrapper = styled.div`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    width: 138px;
    height: auto;
    margin: 0 4vw;
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  ${theme.mq.tablet} {
    display: none;
  }
`;

const MobileLogoWrapper = styled.div`
  height: 100%;
  width: 9rem;
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

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      fixed: false,
    };
  }

  toggleHamburger = () => {
    this.setState({
      active: true,
    });
  };

  toggleFixedMenu = () => {
    this.setState({
      fixed: true,
    });
  };

  componentDidMount() {
    const nav = document.querySelector('.navigation');
    const navTop = nav.offsetTop;

    function stickyNavigation() {
      // console.log('navTop = ' + navTop);
      // console.log('scrollY = ' + window.scrollY);      // console.log('navTop = ' + navTop);
      // console.log('scrollY = ' + window.scrollY);

      // if (window.scrollY >= navTop) {
      //   // nav offsetHeight = height of nav
      //   document.body.style.paddingTop = nav.offsetHeight + 'px';
      //   document.body.classList.add('fixed-nav');
      // } else {
      //   document.body.style.paddingTop = 0;
      //   document.body.classList.remove('fixed-nav');
      // }

      // if (window.scrollY > 600) {
      //   toggleFixedMenu;
      // } else {
      //   toggleFixedMenu();
      // }
    }

    window.addEventListener('scroll', stickyNavigation);
  }

  render() {
    return (
      <StyledNavbar
        role="navigation"
        aria-label="main-navigation"
        className="navigation"
      >
        <MobileNavHeader>
          <MobileLogoWrapper>
            <Link to="/">
              <Image filename="logo.png" alt="Logo LiteraCafe" />
            </Link>
          </MobileLogoWrapper>

          <Hamburger
            onClick={this.toggleHamburger}
            isOpen={this.state.active}
          />
        </MobileNavHeader>

        <NavBarMenu isActive={this.state.active}>
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
      </StyledNavbar>
    );
  }
};

export default Navbar;
