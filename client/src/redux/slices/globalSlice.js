import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  themeMode: 'dark',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.themeMode = state.themeMode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const {setThemeMode} = globalSlice.actions;

export default globalSlice.reducer;
