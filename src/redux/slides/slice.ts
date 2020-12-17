import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import colors from '../../styles/colors';

const { white } = colors;

interface SlidesFetcherState {
  slidesRaw?: [];
  isPrintMode: boolean;
  weekNumber: number;
  themeColor: string;
}

const initialState: SlidesFetcherState = {
  slidesRaw: undefined,
  isPrintMode: false,
  weekNumber: 1,
  themeColor: white,
};

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
    setThemeColor: (state, { payload }) => {
      state.themeColor = payload;
    },
  },
});

export const {
  setSlidesRaw,
  setIsPrintMode,
  setWeekNumber,
  setThemeColor,
} = slidesFetcherSlice.actions;

export const selectSlides = (state: RootState) => state.slides;

export default slidesFetcherSlice.reducer;
