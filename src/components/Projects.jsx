import React from "react";
import { projectData } from "../data/project_data";
import ExperienceCard from "./cards/experienceCard";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h3 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h3>
        <div className=" flex flex-wrap justify-center items-center gap-10">
          {projectData.map((project) => (
            <ExperienceCard
              id={project.id}
              key={project.id}
              isProject={project.isProject}
              position={project.position}
              stack={project.stack}
              img={project.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
