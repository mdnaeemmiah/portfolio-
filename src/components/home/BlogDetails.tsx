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
    <div className="glass-card mx-auto w-full max-w-3xl overflow-hidden">
      <div className="p-6 sm:p-8">
        <p className="section-kicker">Journal</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {blog.data.title}
        </h2>
        <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c27a52]">
          <FaCalendar className="text-sm" />
          {blog.data.category}
        </div>
      </div>

      <div className="px-6 sm:px-8">
        <Image
          src={blog.data.image}
          width={900}
          height={480}
          alt="Blog image"
          className="h-72 w-full rounded-2xl object-cover"
        />
      </div>

      <div className="space-y-6 px-6 pb-10 pt-6 text-base leading-relaxed text-slate-600 sm:px-8">
        {blog.data.content}

        <div className="flex items-center justify-between border-t border-slate-200/70 pt-4 text-sm">
          <div className="flex items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              width={32}
              height={32}
              alt="Author"
              className="rounded-full mr-2"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Author: Naeem
            </span>
          </div>

          <div className="flex items-center text-xs text-slate-600">
            <AiFillLike className="mr-1 text-lg text-[#c27a52]" />
            Likes: <span className="ml-1 font-semibold">20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
