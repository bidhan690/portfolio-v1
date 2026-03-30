import { FC } from "react";
import ProjectCard from "../cards/project-card";

interface ProjectsProps {
  projects: any[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="w-full bg-site-bg py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-8">
        <div className="mb-14 text-left">
          <h4 className="mb-2 text-[20px] font-extrabold uppercase tracking-wide text-blue-500">
            Projects
          </h4>
          <h2 className="text-[24px] font-bold text-site-dark md:text-[22px]">
            Each project is a unique piece of development
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;