import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SectionHeader from 'components/SectionHeader';
import Letter from 'components/Letter';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { theme } from 'assets/styles/theme';
import axios from 'axios';

const SectionWrapper = styled.section`
  position: relative;
  min-height: 300px;
  &:after {
    content: '';
    background-image: url(${({ cupCircle }) =>
      '' + cupCircle + '' ? cupCircle : ''});
    width: 35rem;
    height: 35rem;
    position: absolute;
    top: -13rem;
    left: 50%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const MealsSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const MealWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto 3rem auto;

  ${theme.mq.phone} {
    width: 50%;
    margin: 3rem auto;
    min-height: 150px;

    &:nth-child(even) {
      border-left: 1px solid black;
    }
  }
`;

const MealTitle = styled.h3`
  font-size: 1.8rem;
  padding: 0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin: 0 0 2rem;

  ${theme.mq.phone} {
    margin: 0 0 3rem;
  }
`;

const MealPrice = styled.p`
  font-weight: bold;
`;

const MealList = styled(ReactMarkdown)`
  ul {
    list-style: square inside
      url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==');
    padding: 0;
    margin: 0;

    li {
      padding-bottom: 1rem;
    }
  }
`;

const Loader = styled.div`
  width: 8rem;
  height: 9rem;
  text-align: center;
  margin: 5rem auto;
  border: 10px solid transparent;
  border-top-color: #e2a36d;
  border-bottom-color: #e2a36d;
  border-radius: 50%;
  animation: spin-stretch 2s ease infinite;

  @keyframes spin-stretch {
    50% {
      transform: rotate(360deg) scale(0.7, 0.63);
      border-width: 8px;
    }
    100% {
      transform: rotate(720deg) scale(1, 1);
      border-width: 10px;
    }
  }
`;

class DayLunch extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      error: false,
      meals: [],
    };
  }

  componentDidMount() {
    this.fetchLunchMeals();
  }

  fetchLunchMeals = () => {
    this.setState({ loading: true });
    axios
      .get(`https://pacific-bastion-24909.herokuapp.com/lunches?active=true`)
      .then(meals => {
        this.setState({
          loading: false,
          meals: meals.data,
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  };

  render() {
    const data = this.props.data;

    if (this.state.loading) {
      return (
        <SectionWrapper cupCircle={data.cupCircle.childImageSharp.fluid.src}>
          <Loader />
        </SectionWrapper>
      );
    } else if (this.state.meals.length > 0) {
      return (
        <SectionWrapper cupCircle={data.cupCircle.childImageSharp.fluid.src}>
          <Letter
            letter="L"
            background={data.letterL.childImageSharp.fixed.src}
            top={-17}
            left={-15}
          />

          <SectionHeader title="Lunch dnia" />

          <MealsSection>
            {this.state.meals.map(item => (
              <MealWrapper key={item.id}>
                <MealTitle>{item.title}</MealTitle>
                <MealList source={item.content} />
                <MealPrice>{item.price}</MealPrice>
              </MealWrapper>
            ))}
          </MealsSection>
        </SectionWrapper>
      );
    } else {
      return false;
    }
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cupCircle: file(relativePath: { eq: "cup-circles/cup-circle-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        letterL: file(relativePath: { eq: "background-letter-l.jpg" }) {
          childImageSharp {
            fixed(width: 220, height: 290) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <DayLunch data={data} />}
  />
);
