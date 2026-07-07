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
  order?: number;
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
    <div className="space-y-6">
      <div className="glass-card overflow-hidden p-6">
        <div className="flex flex-col gap-2 border-b border-slate-200/70 pb-4">
          <p className="section-kicker">Projects</p>
          <h2 className="text-2xl font-semibold text-slate-900">All Projects</h2>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th className="dashboard-th">Image</th>
                <th className="dashboard-th">Order</th>
                <th className="dashboard-th">Title</th>
                <th className="dashboard-th">Live Link</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project: Project) => (
                <tr key={project._id} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/40">
                  <td className="dashboard-td">
                    <div className="flex items-center gap-3">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-xl object-cover"
                      />
                    </div>
                  </td>
                  <td className="dashboard-td font-semibold text-slate-900">
                    {project.order ?? 0}
                  </td>
                  <td className="dashboard-td font-semibold text-slate-900">
                    {project.title}
                  </td>
                  <td className="dashboard-td">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                    >
                      View Project
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center">
        <nav className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              currentPage === 1
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : "bg-[#c27a52] text-white hover:bg-[#b86f47]"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                currentPage === number
                  ? "bg-[#c27a52] text-white"
                  : "bg-white text-slate-500 hover:bg-slate-100"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : "bg-[#c27a52] text-white hover:bg-[#b86f47]"
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProjectTable;
