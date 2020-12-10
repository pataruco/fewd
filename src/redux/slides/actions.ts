import { AppThunk } from '../store';
import { history } from '../../routes/index';
import { setIsPrintMode, setSlidesRaw, setWeekNumber } from './slice';

const printModeString = 'exportMode=true&printMode=true';

export const fetchSlides = (slidesDeckName: string): AppThunk => async (
  dispatch,
) => {
  const { default: rawData } = await import(
    `../../slides/${slidesDeckName}.mdx`
  );
  dispatch(setSlidesRaw(rawData));
};

export const checkPrintMode = (): AppThunk => (dispatch) => {
  const {
    location: { search },
  } = history;

  dispatch(setIsPrintMode(search.includes(printModeString)));
};

export const printSlides = () => {
  const {
    location: { pathname, search },
  } = history;
  history.push(`${pathname}${search}&${printModeString}`);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
  window.print();
};

export const getWeek = (): AppThunk => async (dispatch) => {
  const {
    location: { pathname },
  } = history;
  const weekNumber = pathname.split('/')[1].split('-').pop();
  dispatch(setWeekNumber(Number(weekNumber)));
};

export const goToWeek = (weekNumber: number): AppThunk => async (dispatch) => {
  history.push(`/week-${weekNumber}`);
  dispatch(setWeekNumber(weekNumber));
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};
