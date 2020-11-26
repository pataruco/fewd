import React from 'react';
import SlidesDeck from '../components/slides-deck';

export interface WeekRoute {
  week: number;
  lessons: string[];
  'useful-resources'?: string;
  'bonus-materials'?: string;
}

const routes: WeekRoute[] = [
  {
    week: 1,
    lessons: ['01-intro-to-html', '02'],
  },
  {
    week: 2,
    lessons: ['03', '04'],
  },
];

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
