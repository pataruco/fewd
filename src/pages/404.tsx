import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import Header from '../components/header';
import Footer from '../components/footer';

const StyledMain = styled.main`
  padding: 1.25rem;
`;

const ErrorPage: React.FC = () => (
  <>
    <Title title="404" />
    <Header />
    <StyledMain>
      <h1>Page not found ☹️</h1>
    </StyledMain>
    <Footer />
  </>
);

export default ErrorPage;
