// "use client";

// import { useGetAllBlogPostsQuery } from "@/redux/features/blog/blogApi";
// import { Blog as BlogType } from "@/types"; // Import your Blog interface
// import BlogCard from "./BlogCard"; // Import BlogCard
// import { useState } from "react";

// const LatestBlogCard = () => {
//   // Use the hook to get the blogs
//   const { data, isLoading } = useGetAllBlogPostsQuery(undefined);

//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   if (isLoading) {
//     return <p>Loading blogs...</p>;
//   }



//   // Check if `data` exists and is an object with the `data` array
//   const blogs = Array.isArray(data?.data) ? data.data : [];

//   if (blogs.length === 0) {
//     return <p>No blogs available.</p>;
//   }

//   // Calculate pagination variables
//   const totalPosts = blogs.length;
//   const totalPages = Math.ceil(totalPosts / postsPerPage);

//   // Get the posts for the current page
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

//   // Function to handle page change
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h1 className="text-3xl sm:text-4xl text-center my-5 font-bold">
//         Explore More Blogs <span className="text-teal-600">My Site</span>
//       </h1>
//       <p className="text-center text-gray-400 mx-auto w-full md:w-2/3 lg:w-1/2">
//         <i>
//           Dive into the fascinating world of quantum computing, where unlocking
//           unprecedented computational power.
//         </i>
//       </p>

//       {/* Blog grid layout with responsive columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
//         {currentPosts.map((blog: BlogType) => (
//           <BlogCard key={blog._id} blog={blog} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-6">
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="text-white py-2 px-4 rounded-md font-semibold bg-[#C51963] hover:bg-[#C51963]/90 hover:scale-105 transform transition duration-300"
//         >
//           Previous
//         </button>
//         <span className="text-xl self-center">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="text-white py-2 px-4 rounded-md font-semibold bg-[#C51963] hover:bg-[#C51963]/90 hover:scale-105 transform transition duration-300"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LatestBlogCard;




"use client";

import { useGetAllBlogPostsQuery } from "@/redux/features/blog/blogApi";
import { Blog as BlogType } from "@/types";
import BlogCard from "./BlogCard";
import { useState } from "react";

const LatestBlogCard = () => {
  const { data, isLoading } = useGetAllBlogPostsQuery(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }

  const blogs = Array.isArray(data?.data) ? data.data : [];

  if (blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  const totalPosts = blogs.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="section">
      <div className="text-center">
        <p className="section-kicker">Journal</p>
        <h1 className="section-title mt-3">Explore the full archive.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
          A growing collection of thoughts, experiments, and case studies.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <nav className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-2 text-sm shadow-sm">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition 
              ${currentPage === 1
                ? "text-slate-400"
                : "text-slate-700 hover:text-slate-900"}`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition 
                ${currentPage === number
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900"}`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition 
              ${currentPage === totalPages
                ? "text-slate-400"
                : "text-slate-700 hover:text-slate-900"}`}
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
};

export default LatestBlogCard;
