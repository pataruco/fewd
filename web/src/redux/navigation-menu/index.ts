import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NavigationMenu {
  weekIsOpen: boolean;
  bonusLessonsIsOpen: boolean;
}

const initialState: NavigationMenu = {
  weekIsOpen: false,
  bonusLessonsIsOpen: false,
};

export const navigationMenuSlice = createSlice({
  name: 'navigation-menu',
  initialState,
  reducers: {
    openWeekMenu: (state) => {
      state.weekIsOpen = true;
    },
    closeWeekMenu: (state) => {
      state.weekIsOpen = false;
    },

    openBonusLessonMenu: (state) => {
      state.bonusLessonsIsOpen = true;
    },
    closeBonusLessonMenu: (state) => {
      state.bonusLessonsIsOpen = false;
    },
  },
});

export const {
  closeBonusLessonMenu,
  closeWeekMenu,
  openBonusLessonMenu,
  openWeekMenu,
} = navigationMenuSlice.actions;

export const selectNavigationMenu = (state: RootState) =>
  state['navigation-menu'];

export default navigationMenuSlice.reducer;
