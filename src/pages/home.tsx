import React, { lazy, Suspense } from 'react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import slides from '../slides/intro-to-html.mdx';

// @ts-ignore
// import { importMDX } from 'mdx.macro';
import { MDXProvider } from '@mdx-js/react';

const Home: React.FC = () => {
  return (
    <MDXProvider components={mdxComponentMap}>
      <Deck>
        {slides
          // @ts-ignore
          .map((MDXSlide, i) => [MDXSlide])
          // @ts-ignore
          .map(([MDXSlide], i) => (
            // @ts-ignore
            <Slide key={`slide-${i}`} slideNum={i}>
              <MDXSlide />
            </Slide>
          ))}
      </Deck>
    </MDXProvider>
  );
};

export default Home;
