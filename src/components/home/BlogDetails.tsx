"use client";

import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { Blog } from "@/types";

const BlogDetails = ({ blog }: { blog: Blog }) => {


  return (
    <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg mx-auto p-6">
      {/* Blog Title */}
      <h2 className="text-center text-4xl font-semibold my-5">{blog.title}</h2>

      {/* Publish Date and Category */}
      <div className="flex justify-center items-center mb-5">
        <p className="flex items-center text-teal-600 bg-teal-100 w-fit px-3 py-1 rounded-full text-sm">
          <FaCalendar className="mr-2" />
          {blog.category}
        </p>
      </div>

      {/* Blog Image */}
      <figure className="mb-5">
        <Image
          src={blog.image}
          width={800}
          height={400}
          alt="blog image"
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Blog Content */}
      <div className="text-gray-700 text-lg leading-relaxed">
        <p className="text-justify text-gray-500">{blog.content}</p>
      </div>

      {/* Author and Likes */}
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png" // Placeholder image
              width={32}
              height={32}
              alt="author image"
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-500">Author:</span>
        </div>

        <div className="flex items-center text-sm text-gray-700">
          <AiFillLike className="text-teal-600 text-xl mr-1" />
           Likes {/* Display the total likes */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
