// "use client";

// import Image from "next/image";
// import { AiFillLike } from "react-icons/ai";
// import { FaCalendar } from "react-icons/fa";
// import { Blog } from "@/types";

// const BlogDetails = ({ blog }: { blog: Blog }) => {


//   return (
//     <div className="w-full  md:w-2/3  shadow-lg rounded-lg mx-auto p-6">
//       {/* Blog Title */}
//       <h2 className="text-center text-4xl font-semibold text-blue-600 my-5">{blog.data.title}</h2>
//        <p></p>
//        <h1></h1>

//       {/* Publish Date and Category */}
//       <div className="flex justify-center items-center mb-5">
//         <p className="flex items-center text-teal-600 bg-teal-100 w-fit px-3 py-1 rounded-full text-sm">
//           <FaCalendar className="mr-2" />
//           {blog.data.category}
//         </p>
//       </div>

//       {/* Blog Image */}
//       <figure className="mb-5">
//         <Image
//           src={blog.data.image}
//           width={800}
//           height={400}
//           alt="blog image"
//           className="rounded-lg w-full object-cover"
//         />
//       </figure>

//       {/* Blog Content */}
//       <div className="text-gray-700 text-lg leading-relaxed">
//         <p className="text-justify text-gray-500">{blog.data.content}</p>
//       </div>

//       {/* Author and Likes */}
//       <div className="flex justify-between items-center mt-5">
//         <div className="flex items-center">
//           <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
//             <Image
//               src="https://cdn-icons-png.flaticon.com/512/219/219986.png" // Placeholder image
//               width={32}
//               height={32}
//               alt="author image"
//               className="object-cover"
//             />
//           </div>
//           <span className="text-sm font-medium text-gray-500">Author:Naeem</span>
//         </div>

//         <div className="flex items-center text-sm text-gray-700">
//           <AiFillLike className="text-teal-600 text-xl mr-1" />
//            Likes :20
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;


"use client";

import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { Blog } from "@/types";

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-full md:w-2/3 mx-auto p-6 shadow-lg rounded-lg bg-white dark:bg-gray-900">
      {/* Blog Title */}
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-4">
        {blog.data.title}
      </h2>

      

      {/* Category (used as date placeholder here) */}
      <div className="flex justify-center mb-4">
        <span className="flex items-center bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
          <FaCalendar className="mr-2" />
          {blog.data.category}
        </span>
      </div>

      {/* Blog Image */}
      <div className="mb-5">
        <Image
          src={blog.data.image}
          width={800}
          height={400}
          alt="Blog image"
          className="rounded-lg w-full object-cover"
        />
      </div>

       
      {/* Blog Content */}
      <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
        {blog.data.content}
      </div>

      {/* Footer - Author & Likes */}
      <div className="flex justify-between items-center mt-8 border-t pt-4">
        {/* Author Info */}
        <div className="flex items-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
            width={32}
            height={32}
            alt="Author"
            className="rounded-full mr-2"
          />
          <span className="text-sm font-medium text-gray-500">
            Author: Naeem
          </span>
        </div>

        {/* Likes */}
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-400">
          <AiFillLike className="text-teal-600 text-xl mr-1" />
          Likes: <span className="ml-1 font-semibold">20</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
