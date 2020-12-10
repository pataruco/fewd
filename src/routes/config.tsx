import React, { lazy, Suspense } from 'react';
import SlidesDeck from '../components/slides-deck';
import { importMDX } from 'mdx.macro';
import Week from '../pages/week';

export const lessonRoutes = [
  {
    path: '/week-1/lesson-1',
    component: () => <SlidesDeck slidesDeckName="01-html-basics" />,
  },
  {
    path: '/week-1/lesson-2',
    component: () => <SlidesDeck slidesDeckName="02" />,
  },
  {
    path: '/week-2/lesson-3',
    component: () => <SlidesDeck slidesDeckName="03" />,
  },
  {
    path: '/week-2/lesson-4',
    component: () => <SlidesDeck slidesDeckName="04" />,
  },
  {
    path: '/week-3/lesson-5',
    component: () => <SlidesDeck slidesDeckName="05" />,
  },
  {
    path: '/week-3/lesson-6',
    component: () => <SlidesDeck slidesDeckName="06" />,
  },
  {
    path: '/week-4/lesson-7',
    component: () => <SlidesDeck slidesDeckName="07" />,
  },
  {
    path: '/week-4/lesson-8',
    component: () => <SlidesDeck slidesDeckName="08" />,
  },
  {
    path: '/week-5/lesson-9',
    component: () => <SlidesDeck slidesDeckName="09" />,
  },
  {
    path: '/week-5/lesson-10',
    component: () => <SlidesDeck slidesDeckName="10" />,
  },
  {
    path: '/week-6/lesson-11',
    component: () => <SlidesDeck slidesDeckName="11" />,
  },
  {
    path: '/week-6/lesson-12',
    component: () => <SlidesDeck slidesDeckName="12" />,
  },
  {
    path: '/week-7/lesson-13',
    component: () => <SlidesDeck slidesDeckName="13" />,
  },
  {
    path: '/week-7/lesson-14',
    component: () => <SlidesDeck slidesDeckName="14" />,
  },
  {
    path: '/week-8/lesson-15',
    component: () => <SlidesDeck slidesDeckName="15" />,
  },
  {
    path: '/week-8/lesson-16',
    component: () => <SlidesDeck slidesDeckName="16" />,
  },
  {
    path: '/week-9/lesson-17',
    component: () => <SlidesDeck slidesDeckName="17" />,
  },
  {
    path: '/week-9/lesson-18',
    component: () => <SlidesDeck slidesDeckName="18" />,
  },
  {
    path: '/week-10/lesson-19',
    component: () => <SlidesDeck slidesDeckName="19" />,
  },
  {
    path: '/week-10/lesson-20',
    component: () => <SlidesDeck slidesDeckName="20" />,
  },
];

export const weekRoutes = [
  {
    path: '/week-1',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/1.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-2',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/2.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-3',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/3.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-4',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/4.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-5',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/5.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-6',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/6.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-7',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/7.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-8',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/8.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-9',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/9.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
  {
    path: '/week-10',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/10.mdx'));
      return (
        <Week>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
];
