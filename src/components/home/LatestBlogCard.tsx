"use client";

import { useGetAllBlogPostsQuery } from "@/redux/features/blog/blogApi";
import { Blog as BlogType } from "@/types"; // Import your Blog interface
import BlogCard from "./BlogCard"; // Import BlogCard
import { useState } from "react";

const LatestBlogCard = () => {
  // Use the hook to get the blogs
  const { data, isLoading } = useGetAllBlogPostsQuery(undefined);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }



  // Check if `data` exists and is an object with the `data` array
  const blogs = Array.isArray(data?.data) ? data.data : [];

  if (blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  // Calculate pagination variables
  const totalPosts = blogs.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Get the posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl text-center my-5 font-bold">
        Explore More Blogs <span className="text-teal-600">My Site</span>
      </h1>
      <p className="text-center text-gray-400 mx-auto w-full md:w-2/3 lg:w-1/2">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      {/* Blog grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
        {currentPosts.map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 mr-2"
        >
          Previous
        </button>
        <span className="text-xl self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LatestBlogCard;
