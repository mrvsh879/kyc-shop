import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    favorites: favoritesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;