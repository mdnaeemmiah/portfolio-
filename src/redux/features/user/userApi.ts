import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
