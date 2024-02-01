import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './initial-state';

const Reducer = createSlice({
  name: 'documents',
  initialState,

  reducers: {
    addDocuments: (state, { payload }) => {
      return { ...state, allDocuments: payload };
    },
  },
});

const persistConfig = {
  key: 'documents',
  storage,
};

export const persistedDocumentsReducer = persistReducer(
  persistConfig,
  Reducer.reducer
);
export const documentsReducer = Reducer.reducer;
export const {
  addDocuments,
} = Reducer.actions;
