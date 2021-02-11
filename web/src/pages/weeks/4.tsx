import React from 'react';
import Week from '../../components/week';

const resources = [
  [
    'CSS Tricks: Font Size Idea: px at the Root, rem for Components, em for Text Elements ',
    'https://css-tricks.com/rems-ems/',
  ],
  ['REM vs EM – The Great Debate', 'https://zellwk.com/blog/rem-vs-em/'],
];

const weekConfig = {
  resources,
  weekNumber: 4,
  firstLessonTitle: 'Responsive Web development',
  secondLessonTitle: 'Responsive Web development lab 🧪',
  homeworkPath: '/week-4/lesson-8#3',
};

const Week4 = () => <Week {...weekConfig} />;

export default Week4;
