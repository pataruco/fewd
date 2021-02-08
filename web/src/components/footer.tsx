import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;

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

const updateTime = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date());

const datimeString = new Intl.DateTimeFormat('es-GB').format(new Date());

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
    <p>
      <small>
        Last update <time dateTime={datimeString}>{updateTime}</time>
      </small>
    </p>
  </StyledFooter>
);

export default Footer;
