// @ts-nocheck
import React, { useEffect } from 'react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import { MDXProvider } from '@mdx-js/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSlidesRaw, fetchSlides } from '../redux/slides-fetcher/slice';
import styled from 'styled-components';

interface SlidesDeckProps {
  slidesDeckName: string;
}

const theme = {
  size: { width: 1366, height: 768, maxCodePaneHeight: 200 },
  colors: {
    primary: '#000',
    secondary: '#fc6986',
    tertiary: ' #fff',
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
  color: green;
  background-color: red;
  /* min-height: calc(100vh - 24px); */
`;

const SlidesDeck: React.FC<SlidesDeckProps> = ({ slidesDeckName }) => {
  const dispatch = useDispatch();

  const { slidesRaw } = useSelector(selectSlidesRaw);

  useEffect(() => {
    dispatch(fetchSlides(slidesDeckName));
  }, [dispatch, slidesDeckName]);

  return (
    Array.isArray(slidesRaw) && (
      <MDXProvider components={mdxComponentMap}>
        <Deck theme={theme}>
          {slidesRaw.map((MDXSlide, i) => (
            <Slide key={`slide-${i}`}>
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
