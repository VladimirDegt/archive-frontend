import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://contacts-api-3i4o.onrender.com',
    baseUrl: 'http://localhost:3001',

    prepareHeaders(headers, { getState }) {
      const token = getState().token.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users', 'Contacts', 'Files'],
  endpoints: builder => ({
    register: builder.mutation({
      query: newUser => ({
        url: `/users/register`,
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),
    login: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
    changeAvatar: builder.mutation({
      query: file => {
        const formData = new FormData();
        formData.append('avatar', file);

        return {
          url: '/users/avatars',
          method: 'PATCH',
          body: formData,
        };
      },
    }),
    loadFile: builder.mutation({
      query: file => ({
          url: '/files',
          method: 'POST',
          body: file,
      }),
      invalidatesTags: ['Files'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useChangeAvatarMutation,
  useLoadFileMutation,
} = contactApi;
