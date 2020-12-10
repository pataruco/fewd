import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

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

export const selectSlides = (state: RootState) => state.slides;

export default slidesFetcherSlice.reducer;
