import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

interface SlidesFetcherState {
  slidesRaw?: [];
}

const initialState: SlidesFetcherState = {
  slidesRaw: undefined,
};

export const slidesFetcherSlice = createSlice({
  name: 'slides-fetcher',
  initialState,
  reducers: {
    setSlidesRaw: (state, { payload }) => {
      state.slidesRaw = payload;
    },
  },
});

export const { setSlidesRaw } = slidesFetcherSlice.actions;

export const fetchSlides = (slidesDeckName: string): AppThunk => async (
  dispatch,
) => {
  const { default: rawData } = await import(
    `../../slides/${slidesDeckName}.mdx`
  );
  dispatch(setSlidesRaw(rawData));
};

export const selectSlidesRaw = (state: RootState) => state['slides-fetcher'];

export default slidesFetcherSlice.reducer;
