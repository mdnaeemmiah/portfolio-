'use client';

import { useState } from 'react';
import { useGetAllBlogPostsQuery, useDeleteBlogPostMutation, useUpdateBlogPostMutation } from '@/redux/features/blog/blogApi';
import toast from 'react-hot-toast';
import { Pencil, Trash2 } from 'lucide-react';
const BlogTable = () => {
  // Fetch all blog posts
  const { data, isLoading, isError, refetch } = useGetAllBlogPostsQuery(undefined);
  const [deleteBlogPost] = useDeleteBlogPostMutation();
  const [updateBlogPost] = useUpdateBlogPostMutation(); // Mutation for updating a post
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPost, setEditPost] = useState<{ title: string; category: string; content: string; image: string; id: string } | null>(null);

  // Ensure blogPosts is always an array
  const blogPosts = Array.isArray(data?.data) ? data?.data : data?.data?.posts || [];

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 13;

  // ✅ Calculate pagination indexes
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // ✅ Handle pagination controls
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      await deleteBlogPost(id).unwrap();
      toast.success('Blog post deleted successfully!');
      refetch(); // Refetch data to reflect the deletion
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error deleting post:', error);
      toast.error(error?.data?.message || 'Error deleting post');
    }
  };

  const openUpdateModal = (post: { _id?: string; title: string; category: string; content?: string; image?: string }) => {
    // Set default values if content or image are missing
    setEditPost({
      title: post.title,
      category: post.category,
      content: post.content || '',  // Default empty string if content is missing
      image: post.image || '',      // Default empty string if image is missing
      id: post._id || '',           // Ensure the post ID is set correctly
    });
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setEditPost(null);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure id is present before making the API call
    if (!editPost?.id) {
      toast.error('Post ID is missing!');
      return;
    }

    try {
      // Trigger the mutation to update the post
      const updatedPostData = {
        id: editPost.id,         // Post ID
        title: editPost.title,   // Updated title
        category: editPost.category, // Updated category
        content: editPost.content,   // Updated content
        image: editPost.image,       // Updated image URL
      };

      // Sending the updated data to the backend
      await updateBlogPost(updatedPostData).unwrap(); // .unwrap() makes sure errors are caught

      toast.success('Blog post updated successfully!');
      refetch(); // Refetch the blog posts to get the updated data
      closeUpdateModal(); // Close the modal after successful update
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error updating post:', error);
      toast.error(error?.data?.message || 'Error updating post');
    }
  };

  if (isLoading) return <p>Loading blog posts...</p>;
  if (isError) return <p>Error loading blog posts!</p>;

  return (
    <div className="container mx-auto mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
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
            currentPosts.map((post: { _id?: string; title: string; category: string; content?: string; image?: string }, index: number) => (
              <tr key={post._id || index} className="text-center border">
                <td className="border p-2">{post.title}</td>
                <td className="border p-2">{post.category}</td>
<td className="border p-2">
  <button
    onClick={() => openUpdateModal(post)}
    className=" text-white p-2 rounded hover:bg-green-600 transition"
  >
    <Pencil size={16} />
  </button>
</td>
<td className="border p-2">
  <button
    onClick={() => post._id && handleDelete(post._id)}
    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
    disabled={!post._id}
  >
    <Trash2 size={16} />
  </button>
</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No blog posts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Pagination Controls */}
      {blogPosts.length > postsPerPage && (
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={handlePrevPage}
            className="bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            className="bg-gray-500 text-white px-3 py-1 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for updating the blog post */}
      {isModalOpen && editPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h3 className="text-2xl mb-4">Update Blog Post</h3>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  value={editPost.title}
                  onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-semibold mb-2">Category</label>
                <input
                  type="text"
                  id="category"
                  value={editPost.category}
                  onChange={(e) => setEditPost({ ...editPost, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-semibold mb-2">Content</label>
                <textarea
                  id="content"
                  value={editPost.content}
                  onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-semibold mb-2">Image URL</label>
                <input
                  type="text"
                  id="image"
                  value={editPost.image}
                  onChange={(e) => setEditPost({ ...editPost, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" onClick={closeUpdateModal} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTable;
