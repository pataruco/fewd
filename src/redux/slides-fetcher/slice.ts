import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { history } from '../../routes/index';

interface SlidesFetcherState {
  slidesRaw?: [];
  isPrintMode: boolean;
}

const initialState: SlidesFetcherState = {
  slidesRaw: undefined,
  isPrintMode: false,
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
  },
});

export const { setSlidesRaw, setIsPrintMode } = slidesFetcherSlice.actions;

export const fetchSlides = (slidesDeckName: string): AppThunk => async (
  dispatch,
) => {
  const { default: rawData } = await import(
    `../../slides/${slidesDeckName}.mdx`
  );
  dispatch(setSlidesRaw(rawData));
};

export const checkPrintMode = (): AppThunk => (dispatch) => {
  const printModeString = 'exportMode=true&printMode=true';
  const {
    location: { search },
  } = history;

  console.log(search.includes(printModeString));

  dispatch(setIsPrintMode(search.includes(printModeString)));
};

export const selectSlidesRaw = (state: RootState) => state['slides-fetcher'];

export default slidesFetcherSlice.reducer;
