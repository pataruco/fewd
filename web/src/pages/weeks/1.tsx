import React from 'react';
import Week from '../../components/week';

const resources = [
  ['Intro to HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
  [
    'Intro to HTML 5',
    'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  ],
  [
    'History of the Web',
    'https://webfoundation.org/about/vision/history-of-the-web/',
  ],
  [
    'History of the Web (YouTube video)',
    'https://www.youtube.com/watch?v=h8K49dD52WA',
  ],
  [
    'Invention of Internet',
    'https://www.history.com/topics/inventions/invention-of-the-internet',
  ],
  [
    'How CSS works?',
    'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works',
  ],
  ['Intro to CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
  ['Intro to CSS 3', 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'],
  [
    'Intro to Document Object Model (DOM)',
    'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
  ],
];

const Week1 = () => <Week weekNumber={1} resources={resources} />;

export default Week1;
