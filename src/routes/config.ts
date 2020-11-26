export interface WeekRoute {
  week: number;
  lessons: {
    1: string;
    2: string;
  };
  'useful-resources'?: string;
  'bonus-materials'?: string;
}

const routes: WeekRoute[] = [
  {
    week: 1,
    lessons: {
      1: '01-intro-to-html',
      2: '02',
    },
  },
  {
    week: 2,
    lessons: {
      1: '03',
      2: '04',
    },
  },
];

export default routes;
