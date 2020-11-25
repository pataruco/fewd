// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import { MDXProvider } from '@mdx-js/react';

interface SlidesDeckProps {
  slidesDeckName: string;
}

const SlidesDeck: React.FC<SlidesDeckProps> = ({ slidesDeckName }) => {
  const [slidesRaw, setSlidesRaw] = useState(undefined);

  const fetchSlides = async () => {
    const { default: rawData } = await import(
      `../slides/${slidesDeckName}.mdx`
    );
    setSlidesRaw(rawData);
  };

  useEffect(() => {
    fetchSlides();
  });

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
