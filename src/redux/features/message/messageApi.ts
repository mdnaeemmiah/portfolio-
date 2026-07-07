import { baseApi } from "../../api/baseApi";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMessage: builder.mutation({
      query: (messageData) => ({
        url: "/message/create",
        method: "POST",
        body: messageData,
      }),
      invalidatesTags: ["Message"],
    }),
    getAllMessages: builder.query({
      query: () => ({
        url: "/message",
        method: "GET",
      }),
      providesTags: ["Message"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/message/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});

export const {
  useCreateMessageMutation,
  useGetAllMessagesQuery,
  useDeleteMessageMutation,
} = messageApi;
