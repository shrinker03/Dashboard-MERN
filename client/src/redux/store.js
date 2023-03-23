import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'redux/api';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});
setupListeners(store.dispatch);
