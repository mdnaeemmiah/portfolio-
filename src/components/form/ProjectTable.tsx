// 'use client';

// import { useGetAllProjectsQuery } from '@/redux/features/project/projectApi';
// import Image from 'next/image';
// import { useState } from 'react';

// interface Project {
//   _id: string;
//   image: string;
//   title: string;
//   liveLink: string;
// }

// const ProjectTable = () => {
//   const { data, error, isLoading } = useGetAllProjectsQuery(undefined);
//   const projects: Project[] = Array.isArray(data?.data) ? data?.data : [];

//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 10; // Number of projects per page

//   // Calculate the index of the first and last project for the current page
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;

//   // Slice the projects array to get the projects for the current page
//   const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading projects.</p>;

//   return (
//     <div>
//       <div className="overflow-x-auto ">
//         <table className="min-w-full border-collapse border bg-gray-900 border-gray-300">
//           <thead>
//             <tr className="bg-gray-800">
//               <th className="border p-2">Image</th>
//               <th className="border p-2">Title</th>
//               <th className="border p-2">Live Link</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentProjects.map((project: Project) => (
//               <tr key={project._id} className="border text-center">
//                 <td className="border p-2  flex items-center justify-center">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={60}
//                     height={60}
//                     className="rounded"
//                   />
//                 </td>
//                 <td className="border p-2 ">{project.title}</td>
//                 <td className="border p-2">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500"
//                   >
//                     View Project
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 mx-1 border rounded"
//         >
//           Prev
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-4 py-2 mx-1 border rounded ${
//               currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 mx-1 border rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectTable;



'use client';

import { useGetAllProjectsQuery } from '@/redux/features/project/projectApi';
import Image from 'next/image';
import { useState } from 'react';

interface Project {
  _id: string;
  image: string;
  title: string;
  liveLink: string;
}

const ProjectTable = () => {
  const { data, error, isLoading } = useGetAllProjectsQuery(undefined);
  const projects: Project[] = Array.isArray(data?.data) ? data?.data : [];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects.</p>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border bg-gray-900 border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Live Link</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project: Project) => (
              <tr key={project._id} className="border text-center text-white">
                <td className="border p-2 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </td>
                <td className="border p-2">{project.title}</td>
                <td className="border p-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                </td>
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

export default ProjectTable;
