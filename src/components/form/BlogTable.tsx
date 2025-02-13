'use client';

import { useGetAllBlogPostsQuery } from '@/redux/features/blog/blogApi';
import Image from 'next/image';
import { useState } from 'react';

interface BlogPost {
  _id: string;
  image: string;
  title: string;
  category: string;
}

const BlogTable = () => {
  const { data, error, isLoading } = useGetAllBlogPostsQuery(undefined);
  const blogPosts: BlogPost[] = Array.isArray(data?.data) ? data?.data : [];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Number of posts per page

  // Calculate the index of the first and last post for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Slice the blogPosts array to get the posts for the current page
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog posts.</p>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post: BlogPost) => (
              <tr key={post._id} className="border">
                <td className="border p-2">
                  <Image
                    src={post.image}
                    alt=""
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="border p-2">{post.title}</td>
                <td className="border p-2">{post.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 border rounded"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogTable;
