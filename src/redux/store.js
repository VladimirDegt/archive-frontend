import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { contactApi } from 'utils/RTK-Query';
import { persistedUsersReducer } from './users/reducer';
import {persistedDocumentsReducer} from "./documents/reducer";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    token: persistedUsersReducer,
    documents: persistedDocumentsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export const persistor = persistStore(store);
