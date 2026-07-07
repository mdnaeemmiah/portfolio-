import Image from "next/image";
import { Project } from "@/types"; // Assuming you are importing the Project interface
import { Github } from "lucide-react";

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <div className="glass-card mx-auto w-full max-w-3xl overflow-hidden">
      <div className="p-6 sm:p-8">
        <p className="section-kicker">Case Study</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {project.title}
        </h2>
      </div>

      <figure className="px-6 pb-6 sm:px-8">
        <Image
          src={project.image}
          width={900}
          height={480}
          alt={project.title}
          className="h-72 w-full rounded-2xl object-cover"
        />
      </figure>

      <div className="space-y-6 px-6 pb-10 text-base text-slate-600 sm:px-8">
        <p className="leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            className="inline-flex items-center rounded-full border border-slate-200/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-300"
            rel="noopener noreferrer"
          >
            View Live Project
          </a>
          {project.frontendSource && (
            <a
              href={project.frontendSource}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-300"
              rel="noopener noreferrer"
            >
              Frontend Code
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
          {project.backendSource && (
            <a
              href={project.backendSource}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-300"
              rel="noopener noreferrer"
            >
              Backend Code
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
