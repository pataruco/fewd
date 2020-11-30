// @ts-nocheck
import React, { useEffect } from 'react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import { MDXProvider } from '@mdx-js/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSlidesRaw, fetchSlides } from '../redux/slides-fetcher/slice';

interface SlidesDeckProps {
  slidesDeckName: string;
}

const SlidesDeck: React.FC<SlidesDeckProps> = ({ slidesDeckName }) => {
  const dispatch = useDispatch();
  const { slidesRaw } = useSelector(selectSlidesRaw);
  useEffect(() => {
    dispatch(fetchSlides(slidesDeckName));
  }, [dispatch, slidesDeckName]);
  return (
    Array.isArray(slidesRaw) && (
      <MDXProvider components={mdxComponentMap}>
        <Deck>
          {slidesRaw.map((MDXSlide, i) => (
            <Slide key={`slide-${i}`}>
              <MDXSlide />
            </Slide>
          ))}
        </Deck>
      </MDXProvider>
    )
  );
};

export default SlidesDeck;
