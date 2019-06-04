import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css';

const Letter = styled.span`
  font-family: ${theme.font.family.title};
  font-weight: ${theme.font.weight.bold};
  color: black;
  background: url(${({ background }) => (background ? background : '')})
    no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32rem;
`;

const ViewStyle = props => (
  <div className="aos-init" data-aos={props.aos}>
    <Letter background={props.background}>{props.text}</Letter>
  </div>
);

export default Watch(
  class TextComponent extends Component {
    componentDidMount() {
      this.aos = AOS;
      this.aos.init({
        duration: 1000,
      });
    }

    componentDidUpdate() {
      this.aos.refresh();
    }

    render() {
      // const aosClass = classNames({
      //   'aos-init': true,
      //   'viewport-purple': !this.props.isInViewport,
      //   'aos-animate viewport-blue': this.props.isInViewport,
      // });

      return (
        <span>
          {this.props.isInViewport ? (
            <ViewStyle
              aos="fade-up"
              background="http://localhost:8000/static/394cb549baa7194a38413fb07a47c432/33d5e/home-photo2.jpg"
              text="L"
            />
          ) : (
            <ViewStyle
              aos="fade-right"
              background="http://localhost:8000/static/394cb549baa7194a38413fb07a47c432/33d5e/home-photo2.jpg"
              text="L"
            />
          )}
          {this.props.children}
        </span>
      );
    }
  }
);
