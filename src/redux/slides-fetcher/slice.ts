import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { history } from '../../routes/index';

interface SlidesFetcherState {
  slidesRaw?: [];
  isPrintMode: boolean;
  weekNumber: number;
}

const initialState: SlidesFetcherState = {
  slidesRaw: undefined,
  isPrintMode: false,
  weekNumber: 1,
};

const printModeString = 'exportMode=true&printMode=true';

export const slidesFetcherSlice = createSlice({
  name: 'slides-fetcher',
  initialState,
  reducers: {
    setSlidesRaw: (state, { payload }) => {
      state.slidesRaw = payload;
    },
    setIsPrintMode: (state, { payload }) => {
      state.isPrintMode = payload;
    },
    setWeekNumber: (state, { payload }) => {
      state.weekNumber = payload;
    },
  },
});

export const {
  setSlidesRaw,
  setIsPrintMode,
  setWeekNumber,
} = slidesFetcherSlice.actions;

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

export const selectSlidesRaw = (state: RootState) => state['slides-fetcher'];

export default slidesFetcherSlice.reducer;
