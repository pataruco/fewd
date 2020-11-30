import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  padding: 1.25rem;
  background-color: black;
  picture {
    max-width: 12.5%;
  }
`;

const weeksIterator = new Array(10).fill('week');

const Weeks: React.FC = () => (
  <ul>
    {weeksIterator.map((week, i) => (
      <li key={i}>
        <Link to={`${week}-${i + 1}`}>
          {week} {i + 1}
        </Link>
      </li>
    ))}
  </ul>
);

const Header: React.FC = () => (
  <StyledHeader>
    <picture>
      <img
        src="https://pataruco.github.io/ga-assets/assets/logos/ga-text-white.svg"
        alt="General Assembly Logo"
      />
    </picture>
    <nav>
      <ul>
        <li>
          <button>weeks</button>
          <Weeks />
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);

export default Header;
