// @ts-nocheck
import React, { useEffect } from 'react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import { MDXProvider } from '@mdx-js/react';
import { useDispatch, useSelector } from 'react-redux';
import { checkPrintMode, fetchSlides } from '../../redux/slides/actions';
import { selectSlides, setThemeColor } from '../../redux/slides/slice';
import styled from 'styled-components';
import color from '../../styles/colors';

const { white, black, gaRed, markdownCodeBg } = color;

interface SlidesDeckProps {
  slidesDeckName: string;
}

const theme = {
  size: { width: 1366, height: 768, maxCodePaneHeight: 200 },
  colors: {
    primary: black,
    secondary: '#fc6986',
    tertiary: white,
    quaternary: '#ffc951',
    quinary: '#8bddfd',
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace',
  },
  fontSizes: {
    h1: '55px',
    h2: '45px',
    h3: '35px',
    text: '20px',
    monospace: '20px',
  },
  space: [8, 16, 24],
};

const SlideStyles = styled.div`
  min-height: 100%;

  [font-size='h1'],
  [font-size='h2'],
  [font-size='h3'],
  [font-size='h4'] {
    color: ${black};
    text-align: left;
  }

  li > a {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${black};
    text-decoration: none;
    border-bottom: 2px solid ${gaRed};
    transition: 0.2s ease-in all;
    padding: 0;
    margin: 0;

    &:focus,
    &:active,
    &:visited {
      border-bottom-color: ${black};
    }
  }

  pre {
    max-height: none !important;
    color: rgb(171, 178, 191) !important;
    background-color: rgb(40, 44, 52) !important;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: ${markdownCodeBg};
    border-radius: 6px;
  }

  table {
    border: 1px solid ${black};
    border-collapse: collapse;
    td,
    th,
    tr {
      border: 1px solid ${black};
    }

    td,
    th {
      padding: 0.25rem;
    }

    td {
      text-align: left;
    }
  }
`;

const SlidesDeck: React.FC<SlidesDeckProps> = ({ slidesDeckName }) => {
  const dispatch = useDispatch();

  const { slidesRaw, themeColor } = useSelector(selectSlides);

  useEffect(() => {
    dispatch(fetchSlides(slidesDeckName));
  }, [dispatch, slidesDeckName]);

  useEffect(() => {
    dispatch(checkPrintMode());
    dispatch(setThemeColor(white));
  }, [dispatch]);

  return (
    Array.isArray(slidesRaw) && (
      <MDXProvider components={mdxComponentMap}>
        <Deck theme={theme} transitionEffect="fade">
          {slidesRaw.map((MDXSlide, i) => (
            <Slide key={`slide-${i}`} backgroundColor={themeColor}>
              <SlideStyles>
                <MDXSlide />
              </SlideStyles>
            </Slide>
          ))}
        </Deck>
      </MDXProvider>
    )
  );
};

export default SlidesDeck;
