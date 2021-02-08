import React from 'react';
import WeekPage from './week-page';
import { Link } from 'react-router-dom';

interface WeekProps {
  weekNumber: number;
  resources?: string[][];
  bonuses?: string[][];
  firstLessonTitle: string;
  secondLessonTitle: string;
  homeworkPath?: string;
}

interface ListOfDetailsProps {
  details: string[][];
}

const ListOfDetails: React.FC<ListOfDetailsProps> = ({ details }) => (
  <ul>
    {details.map((resource, i) => {
      const [title, url] = resource;
      return (
        <li key={i}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </li>
      );
    })}
  </ul>
);

const Week: React.FC<WeekProps> = ({
  weekNumber,
  resources,
  bonuses,
  firstLessonTitle,
  secondLessonTitle,
  homeworkPath,
}) => {
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
          <Link to={firstLessonPath}>{firstLessonTitle}</Link>
        </li>
        <li>
          Lesson {secondLesson}:{' '}
          <Link to={secondLessonPath}>{secondLessonTitle}</Link>
        </li>
      </ul>

      {resources ? (
        <details>
          <summary>
            <h2>Useful resources</h2>
          </summary>
          <ListOfDetails details={resources} />
        </details>
      ) : null}

      {bonuses ? (
        <details>
          <summary>
            <h2>Bonus materials</h2>
          </summary>
          <ListOfDetails details={bonuses} />
        </details>
      ) : null}

      {homeworkPath ? (
        <h2>
          <Link to={homeworkPath}>Homework</Link>
        </h2>
      ) : null}
    </WeekPage>
  );
};

export default Week;
