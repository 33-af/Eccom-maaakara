import { User } from '../types/User';
import { api } from './api';


export type UserData = Omit<User, "id">;
type ResponseLoginData = User & { token: string };

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: "/user/current",
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useCurrentQuery } = authApi;
export const { endpoints: { login, current } } = authApi;