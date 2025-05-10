import Image from "next/image";
import { Project } from "@/types"; // Assuming you are importing the Project interface

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <div className="w-full md:w-2/3 shadow-lg  dark:bg-gray-900  rounded-lg p-6 mx-auto">
      {/* Project Title */}
      <h2 className="text-center text-4xl text-teal-600 font-semibold my-5">{project.title}</h2>

      {/* Project Image */}
      <figure className="mb-5">
        <Image
          src={project.image}
          width={800}
          height={400}
          alt={project.title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Project Description */}
      <div className=" text-lg leading-relaxed">
        <p className="text-justify ">{project.description}</p>
      </div>

      {/* Link to live project */}
      <div className="mt-5">
        <a
          href={project.liveLink}
          target="_blank"
          className="text-teal-500 underline"
          rel="noopener noreferrer"
        >
          View Live Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
