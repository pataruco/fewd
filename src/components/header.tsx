import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 1.25rem;
  background-color: black;
  picture {
    max-width: 12.5%;
  }
`;

const Header: React.FC = () => (
  <StyledHeader>
    <picture>
      <img
        src="https://pataruco.github.io/ga-assets/assets/logos/ga-text-white.svg"
        alt="General Assembly Logo"
      />
    </picture>
  </StyledHeader>
);

export default Header;
