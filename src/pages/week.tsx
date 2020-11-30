import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const StyledMain = styled.main`
  padding: 1.25rem;
`;

const Week: React.FC = ({ children }) => (
  <>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

export default Week;
