import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
  } from '@reduxjs/toolkit/query/react';
  import { RootState } from '../store';
import { logout, setUser } from '../features/auth/authSlice';
  
  
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://portfolio-server-beta-jet.vercel.app/api',
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      let token = (getState() as RootState).auth.token;

      if (!token && typeof window !== 'undefined') {
        token = localStorage.getItem('accessToken');
      }

      if (token) {
        headers.set('authorization', `${token}`);
      }

      return headers;
    },
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  > = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
  
    // if (result?.error?.status === 404) {
    //   toast.error(result?.error?.data?.message);
    // }
    if (result?.error?.status === 401) {
      //* Send Refresh
      console.log('Sending refresh token');
  
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://portfolio-server-beta-jet.vercel.app/api';
      const res = await fetch(`${baseUrl}/auth/refresh-token`, {
        method: 'POST',
        credentials: 'include',
      });
  
      const data = await res.json();
  
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
  
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );
  
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['semester', 'courses','Message','User'],
    endpoints: () => ({}),
  });