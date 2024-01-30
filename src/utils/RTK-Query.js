import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
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
      query: (page, limit = 12) => ({
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
      query: name => ({
        url: `/api/archive/customer/${name}`,
        method: 'POST',
      }),
      invalidatesTags: ['Archive'],
    }),
    getDogovirFromDB: builder.mutation({
      query: number => ({
        url: `/api/archive/customer/dogovir/${number}`,
        method: 'POST',
      }),
      invalidatesTags: ['Archive'],
    }),
    getActFromDB: builder.mutation({
      query: number => ({
        url: `/api/archive/customer/act/${number}`,
        method: 'POST',
      }),
      invalidatesTags: ['Archive'],
    }),
    countAllDocuments: builder.mutation({
      query: () => ({
        url: `/api/archive/analytics`,
        method: 'POST',
      }),
      invalidatesTags: ['Archive'],
    }),
    getDocumentByDate: builder.mutation({
      query: rangeDate => ({
        url: '/api/archive/rangeDate',
        method: 'POST',
        body: rangeDate
      }),
      invalidatesTags: ['Archive'],
    }),
    getDocumentByTypeDocument: builder.mutation({
      query: type => ({
        url: '/api/archive/typeDocument',
        method: 'POST',
        body: {typeDocument: type}
      }),
      invalidatesTags: ['Archive'],
    }),
    getDocumentByNomenclature: builder.mutation({
      query: nomenclature => ({
        url: '/api/archive/nomenclature',
        method: 'POST',
        body: {nomenclature}
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
  useGetDogovirFromDBMutation,
  useGetActFromDBMutation,
  useCountAllDocumentsMutation,
  useGetDocumentByDateMutation,
  useGetDocumentByTypeDocumentMutation,
  useGetDocumentByNomenclatureMutation
} = contactApi;
