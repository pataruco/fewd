import React, { useEffect } from 'react';
import '../styles/slide-index.scss';

const { PUBLIC_URL } = process.env;

interface SlidesDeckProps {
  slidesDeckName: string;
}

interface GetSlideIndex {
  (): number;
}

interface Slide {
  // Function returning the slides number (0..N-1, where N is the number of slides)
  getSlideIndex: GetSlideIndex;

  // The notes for the slide
  notes: string;

  // The slide properties extracted from the Markdown
  properties: {
    class: string;
    name: string;
  };

  // The Markdown representing the slide
  content: string;
}

const SlidesDeck: React.FC<SlidesDeckProps> = ({ slidesDeckName }) => {
  useEffect(() => {
    // @ts-ignore
    const slides = remark.create({
      sourceUrl: `${PUBLIC_URL}/slides/${slidesDeckName}.md`,
      count: false,
      highlightLines: false,
      highlightSpans: true,
      highlightStyle: 'atom-one-dark',
      navigation: {
        click: false,
        scroll: false,
        touch: true,
      },
      ratio: '16:9',
      // ratio: '64:35', // browser aspect ratio
      slideNumberFormat: '',
    });

    slides.on('showSlide', (slide: Slide) => {
      console.log('hola');
    });
  }, [slidesDeckName]);

  return null;
};

export default SlidesDeck;
