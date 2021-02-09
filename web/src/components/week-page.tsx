import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import Page from './page';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }

  summary > h2 {
    display: inline-block;
  }

  details ul {
    margin: 0;
  }
`;

const WeekPage: React.FC = ({ children }) => (
  <Page>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </Page>
);

export default WeekPage;
