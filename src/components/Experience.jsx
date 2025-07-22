import React from "react";
import ExperienceCard from "./cards/experienceCard";
import { experienceData } from "../data/project_data";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h3 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h3>
        <div className=" flex flex-wrap justify-center items-center">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              id={experience.id}
              img={experience.img}
              position={experience.position}
              stack={experience.stack}
              isProject={experience.isProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
