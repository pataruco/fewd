import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMenu,
  openMenu,
  selectNavigationMenu,
} from '../redux/navigation-menu';
import GALogoTextWhite from './icons/ga-text-white';

const StyledHeader = styled.header`
  padding: 1.25rem;
  background-color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  picture {
    max-width: 12.5%;
    min-width: 100px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  nav > ul {
    display: flex;
    position: relative;
  }

  ul a {
    color: white;
    text-decoration: none;
    border-bottom: none;
    &:hover {
      border-bottom: 2px solid red;
    }
  }

  button {
    appearance: none;
    background-color: black;
    border: none;
    color: white;
    margin-bottom: 0.75rem;
  }

  nav > ul > li:first-of-type > ul > li {
    background-color: black;
    padding: 0.75rem 0.5rem;
  }

  nav > ul li ul {
    position: absolute;
    display: none;
  }

  nav > ul li ul.menu-open {
    display: block;
  }

  nav > ul > li:last-of-type {
    margin-left: 1.25rem;
  }
`;

const weeksIterator = new Array(10).fill('week');

const Weeks: React.FC = () => {
  const { isOpen } = useSelector(selectNavigationMenu);
  const dispatch = useDispatch();

  const close = (event: React.MouseEvent) => {
    dispatch(closeMenu());
  };

  return (
    <ul className={isOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {weeksIterator.map((week, i) => (
        <li key={i}>
          <Link to={`${week}-${i + 1}`}>
            <span onClick={close}>
              {week} {i + 1}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnMouseEnter = (event: React.MouseEvent) => {
    dispatch(openMenu());
  };

  return (
    <StyledHeader>
      <picture>
        <Link to="/">
          <GALogoTextWhite />
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <button onMouseEnter={handleOnMouseEnter}>weeks</button>
            <Weeks />
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default withRouter(Header);
