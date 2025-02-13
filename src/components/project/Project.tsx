"use client";

import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import { Project as ProjectType } from "@/types"; // Import the Project interface
import Link from "next/link"; // Link to project details or live project

const Projects = () => {
  const { data, isLoading, isError, error } = useGetAllProjectsQuery(undefined);

  // Check for loading and error states
  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message}</p>;
  }

  // Ensure data is an array of projects
  const projects = Array.isArray(data?.data) ? data.data : [];

  if (projects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl text-center my-5 font-bold">
        Explore Our Projects
      </h1>
      <p className="text-center text-gray-400 mx-auto w-full md:w-2/3 lg:w-1/2">
        <i>Discover the cutting-edge projects we've built!</i>
      </p>

      {/* Projects grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
        {projects.map((project: ProjectType) => (
          <div key={project._id} className="bg-white shadow-md rounded-lg p-4">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            {/* Project Title */}
            <h2 className="text-xl font-semibold">{project.title}</h2>
            {/* Project Description */}
            <p className="text-gray-600 mt-2">{project.description}</p>
            {/* Live Link */}
            <div className="mt-4">
              <Link href={project.liveLink} passHref>
                <button className="text-blue-500 hover:underline focus:outline-none">
                  View Live Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
