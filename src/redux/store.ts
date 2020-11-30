import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import slidesFetcherReducer from './slides-fetcher/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    'slides-fetcher': slidesFetcherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
