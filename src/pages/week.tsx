import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid red;
    }
  }
`;

const Week: React.FC = ({ children }) => (
  <>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

export default Week;
