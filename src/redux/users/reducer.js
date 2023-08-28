import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './initial-state';

const Reducer = createSlice({
  name: 'users',
  initialState,

  reducers: {
    addToken: (state, { payload }) => {
      return { ...state, token: payload };
    },
    deleteToken: (state, __) => {
      return { ...state, token: '' };
    },
    addAvatar: (state, { payload }) => {
      return { ...state, avatarURL: payload };
    },
    getNameUser: (state, { payload }) => {
      return { ...state, name: payload };
    },
  },
});

const persistConfig = {
  key: 'users',
  storage,
  blacklist: ['isLoading'],
};

export const persistedUsersReducer = persistReducer(
  persistConfig,
  Reducer.reducer
);
export const usersReducer = Reducer.reducer;
export const {
  addToken,
  deleteToken,
  addAvatar,
  getNameUser,
} = Reducer.actions;
