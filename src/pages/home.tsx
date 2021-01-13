import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import styled from 'styled-components';
import Title from '../components/title';

const Weeks = [
  'HTML & CSS Basics',
  'Box Model, CSS Selectors, Specificity & Floats',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
];

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid red;
    }
  }
`;

const Home: React.FC = () => (
  <>
    <Title title="Home" />
    <Header />
    <StyledMain>
      <h1>Welcome to FEWD London 🇬🇧 </h1>
      <nav>
        <ul>
          {Weeks.map((week, i) => (
            <li key={i}>
              <Link key={i} to={`week-${i + 1}`}>
                Week {i + 1}: {week}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledMain>
    <Footer />
  </>
);

export default Home;
