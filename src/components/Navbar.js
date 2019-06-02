import React from 'react';
import { Link } from 'gatsby';
import Hamburger from 'components/Hamburger';
import Image from 'components/Image';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledNavbar = styled.nav`
  font-family: ${theme.font.family.nav};
  overflow: hidden;
  height: 80px;
  background-color: black;
  z-index: 999;
  position: relative;
  ${theme.mq.tablet} {
    height: 13rem;
  }
`;

const NavBarMenu = styled.div`
  padding-bottom: 2rem;
  background-color: black;
    transform: ${({ isActive }) =>
  isActive ? 'scale(1)|' : 'scale(0)'};
  transform: ${({ isActive }) =>
    isActive ? 'translateX(0)' : 'translateX(500px)'};
  transition: transform 200ms;
  ${theme.mq.tablet} {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    align-items: center;
    height: 100%;
    padding-bottom: 0;
    transform: translateY(0);
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
  padding: 1rem 1.2rem;
  text-align: center;
  position: relative;
  font-size: 1.7rem;
  z-index: 100000;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: white;
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleHamburger = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <StyledNavbar
        role="navigation"
        aria-label="main-navigation"
        isOpen={this.state.active}
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

          <LogoWrapper>
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
