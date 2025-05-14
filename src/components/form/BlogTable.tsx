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
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog posts.</p>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border bg-gray-900">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post._id} className="border">
                <td className="border p-2">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="border p-2 text-white">{post.title}</td>
                <td className="border p-2 text-white">{post.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-md">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
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
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition 
                ${currentPage === number
                  ? "bg-[#C51963] text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
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
    </div>
  );
};

export default BlogTable;
