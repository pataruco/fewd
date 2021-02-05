import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import Page from '../components/page';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }
`;

const Week: React.FC = ({ children }) => (
  <Page>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </Page>
);

export default Week;