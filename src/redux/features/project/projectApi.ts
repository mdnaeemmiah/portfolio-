import { baseApi } from "../../api/baseApi"; // Assuming baseApi is already set up

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (projectData) => ({
        url: "/project/create",
        method: "POST",
        body: projectData,
      }),
    }),
    getAllProjects: builder.query({
      query: () => ({
        url: "/project", // Route for fetching all projects
        method: "GET",
      }),
    }),
    getProjectById: builder.query({
      query: (id) => ({
        url: `/project/${id}`, // Route for fetching a project by ID
        method: "GET",
      }),
    }),
    updateProject: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/project/update/${id}`, // Route for updating a project
        method: "PUT",
        body: updatedData,
      }),
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/project/delete/${id}`, // Route for deleting a project
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
