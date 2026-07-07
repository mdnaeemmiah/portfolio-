"use client";

import { useGetAllBlogPostsQuery } from "@/redux/features/blog/blogApi";
import { Blog as BlogType } from "@/types"; // Import your Blog interface
import BlogCard from "./BlogCard"; // Import BlogCard component
import Link from "next/link";

const Blog = () => {
  // Use the hook to get the blogs
  const { data, isLoading } = useGetAllBlogPostsQuery(undefined);

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }


  // Check if `data` exists and is an object with the `data` array
  const blogs = Array.isArray(data?.data) ? data.data : [];

  if (blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <section className="section">
      <div className="text-center">
        <p className="section-kicker">Journal</p>
        <h1 className="section-title mt-3">Thoughts on building modern web products.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
          Short, practical notes on design, engineering, and the craft of
          shipping reliable interfaces.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogs.slice(0, 3).map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full border border-slate-200/70 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
        >
          Explore the full journal
        </Link>
      </div>
    </section>
  );
};

export default Blog;
