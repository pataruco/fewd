import React, { useEffect } from 'react';
import '../styles/slide-index.scss';

const { PUBLIC_URL } = process.env;

interface SlidesDeckProps {
  slidesDeckName: string;
}

const SlidesDeck: React.FC<SlidesDeckProps> = ({ slidesDeckName }) => {
  useEffect(() => {
    // @ts-ignore
    remark.create({
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
  }, [slidesDeckName]);

  return null;
};

export default SlidesDeck;
