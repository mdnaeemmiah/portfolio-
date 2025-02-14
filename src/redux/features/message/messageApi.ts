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
  }),
});

export const {
  useCreateMessageMutation,
  useGetAllMessagesQuery,
} = messageApi;
