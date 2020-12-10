import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import slidesFetcherReducer from './slides-fetcher/slice';
import navigationMenuReducer from './navigation-menu';

export const store = configureStore({
  reducer: {
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
