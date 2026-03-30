import { FC } from "react";
import ScreenshotPreview from "./screenshot-preview";
import { Icons } from "@/lib/Icons";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}


const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  project.reverse = index % 2 !== 0;
  return (
    <article
      className={`group overflow-hidden rounded-[20px]  ${
        project.reverse
          ? "flex flex-col md:flex-row-reverse"
          : "flex flex-col md:flex-row"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <ScreenshotPreview
        src={project.longImage}
        alt={`${project.title} full page preview`}

      />

      <div className="flex w-full flex-col justify-center p-7 md:w-[45%] md:px-10 md:py-11">
        <span className="mb-3 text-[13px] font-bold uppercase tracking-[0.1em] text-blue-500">
          {project.label}
        </span>

        <h3 className="mb-3 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-site-dark md:text-[26px]">
          {project.title}
        </h3>

        <p className="mb-6 text-[15px] font-medium leading-7 text-site-secondary">
          {project.description}
        </p>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-site-bg px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.01em] text-site-dark transition-colors duration-200 hover:bg-site-dark hover:text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 py-2 text-[14px] font-semibold text-site-dark transition-colors duration-200 hover:text-blue-600"
          >
            <Icons.githubIcon />
            <span>Code</span>
          </a>

          <div className="h-5 w-px bg-gray-200" />

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 py-2 text-[14px] font-semibold text-site-dark transition-colors duration-200 hover:text-blue-600"
          >
            <Icons.externalLink />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;