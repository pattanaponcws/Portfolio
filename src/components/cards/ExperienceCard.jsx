// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import React, { useState } from "react";
import { projectData, experienceData } from "../../data/project_data";

const ExperienceCard = ({ id, img, position, stack, isProject }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [project, setProject] = useState(null);

  const handleSeeMoreClick = () => {
    console.log(id);
    const selected = isProject
      ? projectData.find((project) => project.id === id)
      : experienceData.find((experience) => experience.id === id);

    setProject(selected);

    setShowPopup(true);

    console.log(selected);
  };

  const handleClosePopup = () => {
    setProject(null);
    setShowPopup(false);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: "all", once: true }}
        onClick={handleSeeMoreClick}
        className=" cursor-pointer relative rounded-3xl shadow-2xl w-80 h-72 overflow-hidden group bg-foreground"
      >
        <img
          src={img}
          alt="project img"
          className="w-full object-cover group-hover:blur-lg transition-all duration-700 ease-in-out "
        />

        {/* Content that slides up on hover */}
        <div className="absolute bottom-0 left-0 h-full w-full bg-primary px-6 py-4 transform translate-y-1/2 group-hover:translate-y-20 transition-all duration-500 ease-out text-black">
          <h1 className="text-xl font-semibold text-background group-hover:text-white transition-all duration-300">
            {position}
          </h1>
          <p className=" pt-4 text-lg text-background group-hover:text-white transition-all duration-300">
            {stack.map((e) => e).join(" · ")}
          </p>
          <p className=" text-background bottom-28 absolute left-1/2 -translate-x-1/2 hover:text-foreground">
            see more
          </p>
        </div>
      </motion.div>

      {showPopup && (
        <div
          onClick={handleClosePopup}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 mx-5 rounded-2xl shadow-xl max-w-3xl w-full text-black"
          >
            <h1 className=" text-2xl font-bold md:text-4xl">
              {project.position}
            </h1>
            {!project.isProject && (
              <div className=" flex justify-between pt-10">
                <p>{project.company}</p>
                <p>{project.period}</p>
              </div>
            )}
            <div>
              <h1 className=" text-xl font-bold pt-5 text-start">Stack : </h1>
              <ul className=" text-start pl-10">
                {project.stack.map((e, index) => (
                  <li key={index} className=" text-muted-foreground text-lg">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className=" text-xl font-bold pt-5 text-start">
                Description :{" "}
              </h1>
              <ol className=" text-start pl-10">
                {project.desc.map((e, index) => (
                  <li
                    key={index}
                    className=" text-muted-foreground text-lg list-disc"
                  >
                    {e}
                  </li>
                ))}
              </ol>
            </div>
            <div className=" mt-5">
              {!project.isProject ? (
                <>
                  <div className=" flex gap-5 justify-center">
                    <button
                      className=" cosmic-button cursor-pointer"
                      href={project.detail}
                      onClick={() => {
                        window.open(project.detail, "_blank");
                        setShowPopup(false);
                      }}
                    >
                      Company
                    </button>
                    <button
                      className=" cosmic-button cursor-pointer"
                      href={project.source}
                      onClick={() => {
                        window.open(project.source, "_blank");
                        setShowPopup(false);
                      }}
                    >
                      Project
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className=" flex gap-5 justify-center">
                    <button
                      className=" cosmic-button cursor-pointer"
                      href={project.source}
                      onClick={() => {
                        window.open(project.source, "_blank");
                        setShowPopup(false);
                      }}
                      target="_blank"
                    >
                      Source Code
                    </button>
                    {project.detail != "" && (
                      <button
                        className=" cosmic-button cursor-pointer"
                        href={project.detail}
                        onClick={() => {
                          window.open(project.detail, "_blank");
                          setShowPopup(false);
                        }}
                        target="_blank"
                      >
                        File
                      </button>
                    )}
                  </div>
                  <p className=" pt-5 text-red-500">
                    {project.isprivate &&
                      "The owner has set this project to be Private Project"}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceCard;
