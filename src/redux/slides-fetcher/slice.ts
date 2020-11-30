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
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSlidesRaw: (state, { payload }) => {
      state.slidesRaw = payload;
    },
  },
});

export const { setSlidesRaw } = slidesFetcherSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchSlides = (slidesDeckName: string): AppThunk => async (
  dispatch,
) => {
  const { default: rawData } = await import(`../slides/${slidesDeckName}.mdx`);
  dispatch(setSlidesRaw(rawData));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSlidesRaw = (state: RootState) => state['slides-fetcher'];

export default slidesFetcherSlice.reducer;
