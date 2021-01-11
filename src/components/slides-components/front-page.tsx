import React, { useEffect } from 'react';
import { Heading } from 'spectacle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getWeek, goToWeek, printSlides } from '../../redux/slides/actions';
import { selectSlides, setThemeColor } from '../../redux/slides/slice';
import colors from '../../styles/colors';
import GALogoWhite from '../icons/ga-white';

const { gaRed, white, black } = colors;

interface FrontPageProps {
  title: string;
  color: string;
}

const FrontPageWrapper = styled.section`
  height: 100%;
  position: relative;
  background-color: ${gaRed};
  display: flex;
  justify-content: center;
  align-items: center;

  [font-family='header'] {
    color: ${white};
  }

  [font-size='h2'] {
    font-weight: normal;
  }

  button {
    appearance: none;
    color: ${white};
    position: absolute;
    top: 0;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${white};
    padding-left: 0;
    padding-right: 0;
    transition: 0.1s ease-in all;
    cursor: pointer;
    &:focus,
    &:active {
      border-color: ${black};
    }

    &.print {
      right: 0;
    }

    &.back {
      left: 0;
    }
  }

  hr {
    box-sizing: border-box;
    padding: 8px;
    margin: 24px;
    border-color: ${white};
    background-color: ${white};
    height: auto;
    width: 10%;
  }

  picture {
    max-width: 10%;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const FrontPage: React.FC<FrontPageProps> = ({ title, color = gaRed }) => {
  const dispatch = useDispatch();

  const { isPrintMode, weekNumber } = useSelector(selectSlides);

  useEffect(() => {
    dispatch(getWeek());
    dispatch(setThemeColor(color));
    return () => {
      dispatch(setThemeColor(white));
    };
  }, [dispatch, color]);

  const handlePrintSlides = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(printSlides());
  };

  const handleBackToWeek = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(goToWeek(weekNumber));
  };

  return (
    <FrontPageWrapper>
      {!isPrintMode && (
        <button onClick={handleBackToWeek} className="back">
          back to week {weekNumber}
        </button>
      )}
      {!isPrintMode && (
        <button onClick={handlePrintSlides} className="print">
          print slides
        </button>
      )}
      <div className="titles-wrapper">
        <Heading fontSize="h2">Front-End Web Development</Heading>
        <hr />
        <Heading>{title}</Heading>
      </div>
      <picture>
        <GALogoWhite />
      </picture>
    </FrontPageWrapper>
  );
};

export default FrontPage;
