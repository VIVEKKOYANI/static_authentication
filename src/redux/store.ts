import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import registerSlice from './slices/registerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
