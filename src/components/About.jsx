// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import React from "react";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: "all", once: true }}
    >
      <section id="about" className={`py-24 px-4 relative `}>
        <div className=" container mx-auto max-w-5xl">
          <h3 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className=" text-primary">Me</span>
          </h3>
          <div className=" space-y-6">
            <p className=" text-muted-foreground">
              Computer Engineering graduate with a strong interest in{" "}
              <span className="text-primary font-bold">
                {" "}
                Software Engineering and Full-Stack Development.
              </span>{" "}
              Experienced in building applications across both frontend and
              backend using technologies such as React.js, Node.js, and
              Express.js. Possesses a solid foundation in data structures,
              algorithms, and database systems. Highly adaptable, a fast
              learner, and effective in collaborative team environments.
            </p>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a
                  href="./transcipt_eng_pattanapon.pdf"
                  download={true}
                  className=" cosmic-button"
                >
                  Download Transcript
                </a>
                <a
                  href="./resume_pattanapon.pdf"
                  download={true}
                  className=" cosmic-button"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className=" space-y-6">
              <h3 className=" text-xl font-semibold ">SUMMARY</h3>
              <p className=" text-muted-foreground">
                Computer Engineering graduate with a strong interest in{" "}
                <span className="text-primary font-bold">
                  {" "}
                  Software Engineering and Full-Stack Development.
                </span>{" "}
                Experienced in building applications across both frontend and
                backend using technologies such as React.js, Node.js, and
                Express.js. Possesses a solid foundation in data structures,
                algorithms, and database systems. Highly adaptable, a fast
                learner, and effective in collaborative team environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a
                  href="./resume_pattanapon.pdf"
                  download={true}
                  className=" cosmic-button"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className=" space-y-6">
              <h3 className=" text-xl font-semibold ">
                Passionate Web Developer & Tech Creator
              </h3>
              <p className=" text-muted-foreground">
                Highly motivated Computer Engineering graduate with a strong
                passion for{" "}
                <span className="text-primary font-bold">
                  {" "}
                  crafting innovative web solutions{" "}
                </span>{" "}
                and driving technological advancements. Experienced in building
                robust full-stack applications using modern technologies like
                React.js, Node.js, and Express.js. Possesses a solid foundation
                in data structures, algorithms, and database systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a
                  href="./resume_pattanapon.pdf"
                  download={true}
                  className=" cosmic-button"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
