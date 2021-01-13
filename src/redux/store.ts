import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import slidesFetcherReducer from './slides/slice';
import navigationMenuReducer from './navigation-menu';

export const store = configureStore({
  reducer: {
    slides: slidesFetcherReducer,
    'navigation-menu': navigationMenuReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        'slides-fetcher/setSlidesRaw',
        'slides-fetcher/setWeekNumber',
        'slides-fetcher/setThemeColor',
      ],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
