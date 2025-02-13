import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlogPost: builder.mutation({
      query: (blogData) => ({
        url: "/blog/create",
        method: "POST",
        body: blogData,
      }),
    }),
    getAllBlogPosts: builder.query({
      query: () => ({
        url: "/blog", // ✅ Wrap it inside an object
        method: "GET", // ✅ Explicitly define the method
      }),
    }),
    getBlogPostById: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
    }),
    updateBlogPost: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/blog/update/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    deleteBlogPost: builder.mutation({
      query: (id) => ({
        url: `/blog/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateBlogPostMutation,
  useGetAllBlogPostsQuery,
  useGetBlogPostByIdQuery,
  useUpdateBlogPostMutation,
  useDeleteBlogPostMutation,
} = blogApi;
