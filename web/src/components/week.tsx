import React from 'react';
import WeekPage from './week-page';
import { Link } from 'react-router-dom';

interface WeekProps {
  weekNumber: number;
  resources: string[][];
}

const Week: React.FC<WeekProps> = ({ weekNumber, resources }) => {
  const secondLesson = weekNumber * 2;
  const firstLesson = secondLesson - 1;

  const firstLessonPath = `week-${weekNumber}/lesson-${firstLesson}`;
  const secondLessonPath = `week-${weekNumber}/lesson-${secondLesson}`;

  return (
    <WeekPage>
      <h1>Week {weekNumber}</h1>
      <h2>Lessons</h2>
      <ul>
        <li>
          Lesson {firstLesson}:{' '}
          <Link to={firstLessonPath}>Orientation and introduction to HTML</Link>
        </li>
        <li>
          Lesson {secondLesson}:{' '}
          <Link to={secondLessonPath}>Advanced HTML & Intro to CSS</Link>
        </li>
      </ul>

      <details>
        <summary>
          <h2 className="details-summary">Useful resources</h2>
        </summary>
        <ul>
          {resources.map((resource, i) => {
            const [title, url] = resource;

            return (
              <li>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
      <details>
        <summary>
          <h2>Bonus materials</h2>
        </summary>
        <ul>
          <li>
            Complete a challenge that you haven't done yet on
            <a
              href="https://dash.generalassemb.ly/"
              target="_blank"
              rel="noreferrer"
            >
              Dash
            </a>
          </li>
          <li>
            Read through Getting to know
            <a
              href="https://learn.shayhowe.com/html-css/getting-to-know-html/"
              target="_blank"
              rel="noreferrer"
            >
              HTML
            </a>
          </li>
          <li>
            Read through Getting to know
            <a
              href="https://learn.shayhowe.com/html-css/getting-to-know-css/"
              target="_blank"
              rel="noreferrer"
            >
              CSS
            </a>
          </li>
          <li>
            Watch
            <a
              href="https://www.youtube.com/watch?v=vDv5K5PbvO8"
              target="_blank"
              rel="noreferrer"
            >
              Intro to GitHub video
            </a>
          </li>
        </ul>
      </details>
    </WeekPage>
  );
};

export default Week;
