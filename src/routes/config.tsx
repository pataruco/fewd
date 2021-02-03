import React, { lazy, Suspense } from 'react';
import SlidesDeck from '../components/slides-deck';
import { importMDX } from 'mdx.macro';
import Week from '../pages/week';
import Title from '../components/title';

export const lessonRoutes = [
  {
    path: '/week-1/lesson-1',
    component: () => (
      <>
        <Title week={1} lesson={1} />
        <SlidesDeck slidesDeckName="01-html-basics" />
      </>
    ),
  },
  {
    path: '/week-1/lesson-2',
    component: () => (
      <>
        <Title week={1} lesson={2} />
        <SlidesDeck slidesDeckName="02-advanced-html-intro-to-css" />
      </>
    ),
  },
  {
    path: '/week-2/lesson-3',
    component: () => (
      <>
        <Title week={2} lesson={3} />
        <SlidesDeck slidesDeckName="03-box-model" />
      </>
    ),
  },
  {
    path: '/week-2/lesson-4',
    component: () => (
      <>
        <Title week={2} lesson={4} />
        <SlidesDeck slidesDeckName="04-css-selectors-specificity-float" />
      </>
    ),
  },
  {
    path: '/week-3/lesson-5',
    component: () => (
      <>
        <Title week={3} lesson={5} />
        <SlidesDeck slidesDeckName="05-flexbox" />
      </>
    ),
  },
  {
    path: '/week-3/lesson-6',
    component: () => (
      <>
        <Title week={3} lesson={6} />
        <SlidesDeck slidesDeckName="06-positioning" />
      </>
    ),
  },
  {
    path: '/week-4/lesson-7',
    component: () => (
      <>
        <Title week={4} lesson={7} />
        <SlidesDeck slidesDeckName="07-responsive" />
      </>
    ),
  },
  {
    path: '/week-4/lesson-8',
    component: () => (
      <>
        <Title week={4} lesson={8} />
        <SlidesDeck slidesDeckName="08-responsive-lab" />
      </>
    ),
  },
  {
    path: '/week-5/lesson-9',
    component: () => (
      <>
        <Title week={5} lesson={9} />
        <SlidesDeck slidesDeckName="09-intro-to-js" />
      </>
    ),
  },
  {
    path: '/week-5/lesson-10',
    component: () => (
      <>
        <Title week={5} lesson={10} />
        <SlidesDeck slidesDeckName="10-document-object-model" />
      </>
    ),
  },
  {
    path: '/week-6/lesson-11',
    component: () => (
      <>
        <Title week={6} lesson={11} />
        <SlidesDeck slidesDeckName="11-conditional-statements" />
      </>
    ),
  },
  {
    path: '/week-6/lesson-12',
    component: () => (
      <>
        <Title week={6} lesson={12} />
        <SlidesDeck slidesDeckName="12-arrays-loops" />
      </>
    ),
  },
  {
    path: '/week-7/lesson-13',
    component: () => (
      <>
        <Title week={7} lesson={13} />
        <SlidesDeck slidesDeckName="13-animations" />
      </>
    ),
  },
  {
    path: '/week-7/lesson-14',
    component: () => (
      <>
        <Title week={7} lesson={14} />
        <SlidesDeck slidesDeckName="14" />
      </>
    ),
  },
  {
    path: '/week-8/lesson-15',
    component: () => (
      <>
        <Title week={8} lesson={15} />
        <SlidesDeck slidesDeckName="15" />
      </>
    ),
  },
  {
    path: '/week-8/lesson-16',
    component: () => (
      <>
        <Title week={8} lesson={16} />
        <SlidesDeck slidesDeckName="16" />
      </>
    ),
  },
  {
    path: '/week-9/lesson-17',
    component: () => (
      <>
        <Title week={9} lesson={17} />
        <SlidesDeck slidesDeckName="17" />
      </>
    ),
  },
  {
    path: '/week-9/lesson-18',
    component: () => (
      <>
        <Title week={9} lesson={18} />
        <SlidesDeck slidesDeckName="18" />
      </>
    ),
  },
  {
    path: '/week-10/lesson-19',
    component: () => (
      <>
        <Title week={10} lesson={19} />
        <SlidesDeck slidesDeckName="19" />
      </>
    ),
  },
  {
    path: '/week-10/lesson-20',
    component: () => (
      <>
        <Title week={10} lesson={20} />
        <SlidesDeck slidesDeckName="20" />
      </>
    ),
  },
];

export const weekRoutes = [
  {
    path: '/week-1',
    component: () => {
      const Content = lazy(() => importMDX('../weeks/1.mdx'));
      return (
        <Week>
          <Title week={1} />
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
          <Title week={2} />
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
          <Title week={3} />
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
          <Title week={4} />
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
          <Title week={5} />
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
          <Title week={6} />
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
          <Title week={7} />
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
          <Title week={8} />
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
          <Title week={9} />
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
          <Title week={10} />
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </Week>
      );
    },
  },
];
