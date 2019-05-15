import React from 'react';
import { Link } from 'gatsby';
import Hamburger from 'components/Hamburger'
import 'assets/styles/index.scss'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src="../assets/img/logo.png" alt="The Cafe" style={{ width: '88px' }}/>
            </Link>

            <Hamburger onClick={this.toggleHamburger} isOpen={this.state.active}/>

          </div>
          <div
            id="navMenu"
            className={`navbar-menu` + (this.state.active ? 'is-active' : '')}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/start" >
                Start
              </Link>
              <Link className="navbar-item" to="/menu">
                Menu
              </Link>
              <Link className="navbar-item" to="/wydarzenia">
                Wydarzenia
              </Link>
              <Link className="navbar-item" to="/o-nas">
                O nas
              </Link>
              <Link className="navbar-item" to="/tandemy">
                Tandemy
              </Link>
              <Link className="navbar-item" to="/kontakt">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
