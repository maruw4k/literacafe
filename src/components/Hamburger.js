import React from 'react';

const Hamburger = props => {
  return (
    <div
      className={
        'navbar-burger burger' + (props.isOpen ? 'is-active' : '') + ''
      }
      data-target="navMenu"
      onClick={props.onClick}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default Hamburger;
