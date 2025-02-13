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
  const projectsPerPage = 10; // Number of projects per page

  // Calculate the index of the first and last project for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  // Slice the projects array to get the projects for the current page
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects.</p>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Live Link</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project: Project) => (
              <tr key={project._id} className="border">
                <td className="border p-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </td>
                <td className="border p-2">{project.title}</td>
                <td className="border p-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 border rounded"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectTable;
