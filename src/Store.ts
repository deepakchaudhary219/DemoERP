import { configureStore } from '@reduxjs/toolkit';
import visibilityReducer from './visibilitySlice';

const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
