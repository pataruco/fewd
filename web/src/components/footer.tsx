import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
  padding: 1.25rem;
  p {
    color: white;
    text-align: center;
    max-width: 100%;
    span {
      color: red;
    }

    a {
      color: white;
      &:hover {
        text-decoration: underline 2px solid white;
      }
    }
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <p>
      Made with{' '}
      <span role="img" aria-labelledby="heart">
        ❤️
      </span>{' '}
      by <a href="https://github.com/pataruco">@pataruco</a>{' '}
      {new Date().getFullYear()}
    </p>
  </StyledFooter>
);

export default Footer;
