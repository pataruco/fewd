import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import slidesFetcherReducer from './slides-fetcher/slice';
import navigationMenuReducer from './navigation-menu';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    'slides-fetcher': slidesFetcherReducer,
    'navigation-menu': navigationMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
