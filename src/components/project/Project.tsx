/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import { Project as ProjectType } from "@/types"; // Import the Project interface
import Link from "next/link"; // Link to project details or live project

const Projects = () => {
  const { data, isLoading } = useGetAllProjectsQuery(undefined);

  // Check for loading and error states
  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  // Ensure data is an array of projects
  const projects = Array.isArray(data?.data) ? data.data : [];

  if (projects.length === 0) {
    return <p>No projects available.</p>;
  }

  // Function to truncate the description if it's longer than 20 words
  const truncateDescription = (description: string, wordLimit: number = 20) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return description;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl text-center my-5 font-bold">
        Explore Our Projects
      </h1>
      <p className="text-center text-gray-400 mx-auto w-full md:w-2/3 lg:w-1/2">
        <i>Discover the cutting-edge projects we have built!</i>
      </p>

      {/* Projects grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5 ">
        {projects.map((project: ProjectType) => (
          <div key={project._id} className="shadow-lg  dark:bg-gray-900  rounded-lg p-4">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            {/* Project Title */}
            <h2 className="text-xl font-semibold text-teal-600">{project.title}</h2>
            {/* Project Description */}
            <p className=" mt-2">
              {truncateDescription(project.description)}{" "}
              {project.description.split(" ").length > 5 && (
                <Link href={`/project/${project._id}`} passHref>
                  <button className="text-blue-500 hover:underline focus:outline-none">
                    See More...
                  </button>
                </Link>
              )}
            </p>
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
