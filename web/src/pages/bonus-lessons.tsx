import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import Header from '../components/header';
import Footer from '../components/footer';
import Page from '../components/page';
import { Link } from 'react-router-dom';

const StyledMain = styled.main`
  padding: 1.25rem;
`;

const About: React.FC = () => (
  <Page>
    <Title title="About" />
    <Header />
    <StyledMain>
      <h1>Bonus Lessons</h1>
      <ul>
        <li>
          <Link to="/bonus-lessons/grids">Grids</Link>
        </li>
      </ul>
    </StyledMain>
    <Footer />
  </Page>
);

export default About;
