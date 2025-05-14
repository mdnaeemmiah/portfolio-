/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// import {
//   useGetAllBlogPostsQuery,
//   useDeleteBlogPostMutation,
//   useUpdateBlogPostMutation,
// } from "@/redux/features/blog/blogApi";
// import toast from "react-hot-toast";
// import { Pencil, Trash2 } from "lucide-react";
// const BlogTable = () => {
//   // Fetch all blog posts
//   const { data, isLoading, isError, refetch } =
//     useGetAllBlogPostsQuery(undefined);
//   const [deleteBlogPost] = useDeleteBlogPostMutation();
//   const [updateBlogPost] = useUpdateBlogPostMutation(); // Mutation for updating a post

//   // Modal state
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editPost, setEditPost] = useState<{
//     title: string;
//     category: string;
//     content: string;
//     image: string;
//     id: string;
//   } | null>(null);

//   // Ensure blogPosts is always an array
//   const blogPosts = Array.isArray(data?.data)
//     ? data?.data
//     : data?.data?.posts || [];

//   // ✅ Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 13;

//   // ✅ Calculate pagination indexes
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

//   // ✅ Handle pagination controls
//   const totalPages = Math.ceil(blogPosts.length / postsPerPage);
//   const handleNextPage = () =>
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this blog post?")) return;

//     try {
//       await deleteBlogPost(id).unwrap();
//       toast.success("Blog post deleted successfully!");
//       refetch(); // Refetch data to reflect the deletion
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       console.error("Error deleting post:", error);
//       toast.error(error?.data?.message || "Error deleting post");
//     }
//   };

//   const openUpdateModal = (post: {
//     _id?: string;
//     title: string;
//     category: string;
//     content?: string;
//     image?: string;
//   }) => {
//     // Set default values if content or image are missing
//     setEditPost({
//       title: post.title,
//       category: post.category,
//       content: post.content || "", // Default empty string if content is missing
//       image: post.image || "", // Default empty string if image is missing
//       id: post._id || "", // Ensure the post ID is set correctly
//     });
//     setIsModalOpen(true);
//   };

//   const closeUpdateModal = () => {
//     setIsModalOpen(false);
//     setEditPost(null);
//   };

//   const handleUpdateSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Ensure id is present before making the API call
//     if (!editPost?.id) {
//       toast.error("Post ID is missing!");
//       return;
//     }

//     try {
//       // Trigger the mutation to update the post
//       const updatedPostData = {
//         id: editPost.id, // Post ID
//         title: editPost.title, // Updated title
//         category: editPost.category, // Updated category
//         content: editPost.content, // Updated content
//         image: editPost.image, // Updated image URL
//       };

//       // Sending the updated data to the backend
//       await updateBlogPost(updatedPostData).unwrap(); // .unwrap() makes sure errors are caught

//       toast.success("Blog post updated successfully!");
//       refetch(); // Refetch the blog posts to get the updated data
//       closeUpdateModal(); // Close the modal after successful update
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       console.error("Error updating post:", error);
//       toast.error(error?.data?.message || "Error updating post");
//     }
//   };

//   if (isLoading) return <p>Loading blog posts...</p>;
//   if (isError) return <p>Error loading blog posts!</p>;

//   return (
//     <div className="container mx-auto mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-800 text-white">
//             <th className="border p-2">Title</th>
//             <th className="border p-2">Category</th>
//             <th className="border p-2">Update</th>
//             <th className="border p-2">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentPosts.length > 0 ? (
//             currentPosts.map(
//               (
//                 post: {
//                   _id?: string;
//                   title: string;
//                   category: string;
//                   content?: string;
//                   image?: string;
//                 },
//                 index: number
//               ) => (
//                 <tr key={post._id || index} className="text-center border">
//                   <td className="border p-2">{post.title}</td>
//                   <td className="border p-2">{post.category}</td>
//                   <td className="border p-2">
//                     <button
//                       onClick={() => openUpdateModal(post)}
//                       className="text-white p-2 rounded hover:bg-green-600 transition group"
//                     >
//                       <span className="group-hover:underline">
//                         <Pencil size={16} />
//                       </span>
//                     </button>
//                   </td>
//                   <td className="border p-2">
//                     <button
//                       onClick={() => post._id && handleDelete(post._id)}
//                       className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
//                       disabled={!post._id}
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )
//           ) : (
//             <tr>
//               <td colSpan={4} className="text-center p-4">
//                 No blog posts found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>



//       {/* Modal for updating the blog post */}
//       {isModalOpen && editPost && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-1/3">
//             <h3 className="text-2xl mb-4">Update Blog Post</h3>
//             <form onSubmit={handleUpdateSubmit}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="title"
//                   className="block text-sm font-semibold mb-2"
//                 >
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   value={editPost.title}
//                   onChange={(e) =>
//                     setEditPost({ ...editPost, title: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="category"
//                   className="block text-sm font-semibold mb-2"
//                 >
//                   Category
//                 </label>
//                 <input
//                   type="text"
//                   id="category"
//                   value={editPost.category}
//                   onChange={(e) =>
//                     setEditPost({ ...editPost, category: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="content"
//                   className="block text-sm font-semibold mb-2"
//                 >
//                   Content
//                 </label>
//                 <textarea
//                   id="content"
//                   value={editPost.content}
//                   onChange={(e) =>
//                     setEditPost({ ...editPost, content: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="image"
//                   className="block text-sm font-semibold mb-2"
//                 >
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   id="image"
//                   value={editPost.image}
//                   onChange={(e) =>
//                     setEditPost({ ...editPost, image: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={closeUpdateModal}
//                   className="bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogTable;




"use client";

import { useState } from "react";
import {
  useGetAllBlogPostsQuery,
  useDeleteBlogPostMutation,
  useUpdateBlogPostMutation,
} from "@/redux/features/blog/blogApi";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";
import { FiEdit } from 'react-icons/fi';

const BlogTable = () => {
  const { data, isLoading, isError, refetch } =
    useGetAllBlogPostsQuery(undefined);
  const [deleteBlogPost] = useDeleteBlogPostMutation();
  const [updateBlogPost] = useUpdateBlogPostMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPost, setEditPost] = useState<{
    title: string;
    category: string;
    content: string;
    image: string;
    id: string;
  } | null>(null);

  const blogPosts = Array.isArray(data?.data)
    ? data?.data
    : data?.data?.posts || [];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);


  const goToPage = (page: number) => setCurrentPage(page);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      await deleteBlogPost(id).unwrap();
      toast.success("Blog post deleted successfully!");
      refetch();
    } catch (error: any) {
      console.error("Error deleting post:", error);
      toast.error(error?.data?.message || "Error deleting post");
    }
  };

  const openUpdateModal = (post: {
    _id?: string;
    title: string;
    category: string;
    content?: string;
    image?: string;
  }) => {
    setEditPost({
      title: post.title,
      category: post.category,
      content: post.content || "",
      image: post.image || "",
      id: post._id || "",
    });
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setEditPost(null);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editPost?.id) {
      toast.error("Post ID is missing!");
      return;
    }

    try {
      const updatedPostData = {
        id: editPost.id,
        title: editPost.title,
        category: editPost.category,
        content: editPost.content,
        image: editPost.image,
      };

      await updateBlogPost(updatedPostData).unwrap();
      toast.success("Blog post updated successfully!");
      refetch();
      closeUpdateModal();
    } catch (error: any) {
      console.error("Error updating post:", error);
      toast.error(error?.data?.message || "Error updating post");
    }
  };

  if (isLoading) return <p>Loading blog posts...</p>;
  if (isError) return <p>Error loading blog posts!</p>;

  return (
    <div className="container mx-auto mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Blog Posts</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border p-2">Title</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Update</th>
            <th className="border p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.length > 0 ? (
            currentPosts.map(
              (
                post: {
                  _id?: string;
                  title: string;
                  category: string;
                  content?: string;
                  image?: string;
                },
                index: number
              ) => (
                <tr key={post._id || index} className="text-center border">
                  <td className="border p-2 text-white">{post.title}</td>
                  <td className="border p-2 text-white">{post.category}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => openUpdateModal(post)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <span className="group-hover:underline">
                        <FiEdit size={16} />
                      </span>
                    </button>
                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => post._id && handleDelete(post._id)}
                      className=" text-red-500 hover:text-red-700"
                      disabled={!post._id}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4 text-white">
                No blog posts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

{/* Pagination */}
<div className="flex justify-center mt-8">
  <nav className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-md">
    <button
      onClick={() => goToPage(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-3 py-1 rounded-md text-sm font-medium transition 
        ${currentPage === 1
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
    >
      Previous
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
      <button
        key={number}
        onClick={() => goToPage(number)}
        className={`px-3 py-1 rounded-md text-sm font-medium transition 
          ${currentPage === number
            ? "bg-[#C51963] text-white"
            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
      >
        {number}
      </button>
    ))}

    <button
      onClick={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-3 py-1 rounded-md text-sm font-medium transition 
        ${currentPage === totalPages
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-[#C51963] text-white hover:bg-[#C51963]/90 hover:scale-105"}`}
    >
      Next
    </button>
  </nav>
</div>


      {/* Update Modal */}
      {isModalOpen && editPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" p-6 bg-gray-900 rounded-lg w-1/3">
            <h3 className="text-2xl mb-4">Update Blog Post</h3>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block font-semibold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={editPost.title}
                  onChange={(e) =>
                    setEditPost({ ...editPost, title: e.target.value })
                  }
                  className="w-full px-3 text-black py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block font-semibold mb-2">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={editPost.category}
                  onChange={(e) =>
                    setEditPost({ ...editPost, category: e.target.value })
                  }
                  className="w-full px-3 py-2 text-black  border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block font-semibold mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  value={editPost.content}
                  onChange={(e) =>
                    setEditPost({ ...editPost, content: e.target.value })
                  }
                  className="w-full px-3 text-black  py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block font-semibold mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  value={editPost.image}
                  onChange={(e) =>
                    setEditPost({ ...editPost, image: e.target.value })
                  }
                  className="w-full px-3 text-black  py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeUpdateModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTable;
