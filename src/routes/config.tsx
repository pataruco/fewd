import React, { lazy, Suspense } from 'react';
import SlidesDeck from '../components/slides-deck';
import { importMDX } from 'mdx.macro';

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

export const weekRoutes = [
  {
    path: '/week-1',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/01.mdx'));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      );
    },
  },
  {
    path: '/week-2',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/02.mdx'));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      );
    },
  },
];
