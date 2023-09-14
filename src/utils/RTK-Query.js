import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://archive-men6.onrender.com',
    baseUrl: 'http://localhost:3001',

    prepareHeaders(headers, { getState }) {
      const token = getState().token.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users', 'Files'],
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
      query: file => ({
        url: '/users/avatars',
        method: 'PATCH',
        body: file,
      }),
      invalidatesTags: ['Users'],
    }),
    loadForm: builder.mutation({
      query: file => ({
        url: '/api/file',
        method: 'POST',
        body: file,
      }),
      invalidatesTags: ['Files'],
    }),
    getFiles: builder.query({
      query: ({ page, limit }) => `/api/file?page=${page}&limit=${limit}`,
      providesTags: ['Files'],
    }),
    getCountDocument: builder.query({
      query: () => `/api/file/document`,
      providesTags: ['Files'],
    }),
    // parsePDF: builder.mutation({
    //   query: file => ({
    //     url: '/api/file/pdf',
    //     method: 'POST',
    //     body: file,
    //   }),
    //   invalidatesTags: ['Files'],
    // }),
    getSearch: builder.mutation({
      query: fieldSearch => ({
        url: '/api/file/search',
        method: 'POST',
        body: fieldSearch,
      }),
      invalidatesTags: ['Files'],
    }),
    getLoadFile: builder.mutation({
      query: id => ({
        url: `/api/file/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Files'],
    }),
    loadFileCSV: builder.mutation({
      query: file => ({
        url: '/api/file/csv',
        method: 'POST',
        body: file,
      }),
      invalidatesTags: ['Files'],
    }),
    getAllDocuments: builder.mutation({
      query: (page, limit=10 ) => ({
        url: `/api/archive?page=${page}&limit=${limit}`,
        method: 'POST',
      }),
      invalidatesTags: ['Archive'],
    }),
    getNameCustomerFromDB: builder.query({
      query: () => `/api/multiDataStore/customer`,
      providesTags: ['multiDataStore'],
    }),
    getCustomerFromDB: builder.mutation({
      query: (name ) => ({
        url: `/api/archive/customer/${name}`,
        method: 'POST',
      }),
      invalidatesTags: ['Archive'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useChangeAvatarMutation,
  useLoadFormMutation,
  useGetFilesQuery,
  useGetCountDocumentQuery,
  // useParsePDFMutation,
  useGetSearchMutation,
  useGetLoadFileMutation,
  useLoadFileCSVMutation,
  useGetAllDocumentsMutation,
  useGetNameCustomerFromDBQuery,
  useGetCustomerFromDBMutation,
} = contactApi;
