import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNavigationMenu,
  closeMobileMenu,
} from '../redux/navigation-menu';

const width = '200px';

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: var(--black);
  color: var(--white);
  padding: 1.25rem;
  width: ${width};
  right: -${width};
  transition: 0.3s all;

  &.mobile-menu-open {
    transform: translateX(-${width});
  }

  ul {
    list-style: none;
  }

  @media screen and (min-width: 600px) {
    & {
      display: none;
    }
  }
`;

const MobileMenu: React.FC = () => {
  const { mobileMenuIsOpen } = useSelector(selectNavigationMenu);
  const dispatch = useDispatch();

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(closeMobileMenu());
  };

  return (
    <StyledNav className={mobileMenuIsOpen ? 'mobile-menu-open' : ''}>
      <button onClick={handleOnClick}>Close</button>
      <ul>
        <li>Weeks</li>
        <li>Bonus Lessons</li>
        <li>Final Project</li>
        <li>About</li>
      </ul>
    </StyledNav>
  );
};

export default MobileMenu;
