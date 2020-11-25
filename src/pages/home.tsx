import React from 'react';
import { Deck, Slide, mdxComponentMap } from 'spectacle';
import slides from '../slides/intro-to-html.mdx';
import { MDXProvider } from '@mdx-js/react';

const Home: React.FC = () => {
  return (
    <MDXProvider components={mdxComponentMap}>
      <Deck>
        {slides
          // @ts-ignore
          .map((MDXSlide, i) => (
            <Slide key={`slide-${i}`}>
              <MDXSlide />
            </Slide>
          ))}
      </Deck>
    </MDXProvider>
  );
};

export default Home;
