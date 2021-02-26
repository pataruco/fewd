import React from 'react';
import styled from 'styled-components';
import MobileMenu from './mobile-menu';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;
  min-height: 100vh;
  position: fixed;

  picture {
    display: block;
  }

  img,
  svg {
    display: block;
    height: auto;
    max-width: 100%;
  }

  main {
    flex: 1 auto;
  }
`;

const Page: React.FC = ({ children }) => (
  <StyledDiv>
    {children}
    <MobileMenu />
  </StyledDiv>
);

export default Page;
