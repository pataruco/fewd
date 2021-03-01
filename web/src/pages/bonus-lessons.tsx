import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import Header from '../components/header';
import Footer from '../components/footer';
import Page from '../components/page';
import { Link } from 'react-router-dom';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }
`;

const bonusLessons = [
  {
    name: 'CSS Grids',
    path: 'grids',
  },
  {
    name: 'HML Tables',
    path: 'tables',
  },
];

const Lessons = bonusLessons.map(({ name, path }, key) => (
  <li key={key}>
    <Link to={`/bonus-lessons/${path}`}>{name}</Link>
  </li>
));

const About: React.FC = () => (
  <Page>
    <Title title="About" />
    <Header />
    <StyledMain>
      <h1>Bonus Lessons</h1>
      <ul>{Lessons}</ul>
    </StyledMain>
    <Footer />
  </Page>
);

export default About;
