import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NavigationMenu {
  isOpen: boolean;
}

const initialState: NavigationMenu = {
  isOpen: false,
};

export const navigationMenuSlice = createSlice({
  name: 'navigation-menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = navigationMenuSlice.actions;

export const selectNavigationMenu = (state: RootState) =>
  state['navigation-menu'];

export default navigationMenuSlice.reducer;
