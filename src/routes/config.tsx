import React from 'react';
import SlidesDeck from '../components/slides-deck';

export const lessonRoutes = [
  {
    path: '/week-1/lesson-1',
    component: () => <SlidesDeck slidesDeckName="01-intro-to-html" />,
  },
  {
    path: '/week-1/lesson-2',
    component: () => <SlidesDeck slidesDeckName="02" />,
  },
  {
    path: '/week-2/lesson-1',
    component: () => <SlidesDeck slidesDeckName="03" />,
  },
  {
    path: '/week-2/lesson-2',
    component: () => <SlidesDeck slidesDeckName="04" />,
  },
];
