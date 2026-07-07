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
    <section className="section">
      <div className="text-center">
        <p className="section-kicker">Selected Work</p>
        <h1 className="section-title mt-3">Projects crafted for clarity and scale.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
          A curated set of products spanning full-stack systems, dashboards,
          and customer-facing experiences.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: ProjectType) => (
          <div key={project._id} className="glass-card overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="space-y-4 p-6">
              <h2 className="text-lg font-semibold text-slate-900">{project.title}</h2>
              <p className="text-sm text-slate-600">
                {truncateDescription(project.description)}{" "}
                {project.description.split(" ").length > 5 && (
                  <Link href={`/project/${project._id}`} passHref>
                    <button className="ml-1 text-sm font-semibold text-slate-900 underline underline-offset-4">
                      See details
                    </button>
                  </Link>
                )}
              </p>
              <div>
                <Link href={project.liveLink} passHref>
                  <button className="rounded-full border border-slate-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
                    View Live
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
