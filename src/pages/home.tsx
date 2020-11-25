// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import { MDXProvider } from '@mdx-js/react';

import slides from '../slides/intro-to-html.mdx';

const Home: React.FC = () => {
  const [slidesRaw, setSlidesRaw] = useState(undefined);

  const fetchSlides = async () => {
    const { default: rawData } = await import('../slides/intro-to-html.mdx');
    console.log({
      slides,
      rawData,
    });
    setSlidesRaw(rawData);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

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

export default Home;
