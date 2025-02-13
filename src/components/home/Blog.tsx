"use client";

import { useGetAllBlogPostsQuery } from "@/redux/features/blog/blogApi";
import { Blog as BlogType } from "@/types"; // Import your Blog interface
import BlogCard from "./BlogCard"; // Import BlogCard component
import Link from "next/link";

const Blog = () => {
  // Use the hook to get the blogs
  const { data, isLoading, isError, error } = useGetAllBlogPostsQuery(undefined);

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }


  // Check if `data` exists and is an object with the `data` array
  const blogs = Array.isArray(data?.data) ? data.data : [];

  if (blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl text-center my-5 font-bold">
        Explore More Blogs <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 mx-auto w-full md:w-2/3 lg:w-1/2">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      {/* Blog grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
        {blogs.slice(0, 3).map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <Link href="/blog">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">
            See More...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
