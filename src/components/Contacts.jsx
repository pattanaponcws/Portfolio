// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { GitCompare, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Contacts = () => {
  return (
    <section className="py-24 px-4" id="contact">
      <div className=" container mx-auto max-w-5xl">
        <h3 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact
        </h3>
        <div className=" flex flex-col items-center justify-center">
          <div className=" flex flex-col gap-20 items-center justify-center md:items-start md:justify-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: "all" }}
              className=" flex items-center gap-10 flex-col md:flex-row"
            >
              <div className=" group text-background bg-foreground w-14 h-14 p-2 rounded-full flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300 cursor-pointer">
                <Mail
                  className="w-12 h-12 "
                  onClick={() =>
                    window.open("mailto:aof.pattanapon@gmail.com", "_blank")
                  }
                />
              </div>

              <a
                className=" text-2xl hover:underline cursor-pointer transition-all duration-300"
                href="mailto:aof.pattanapon@gmail.com"
              >
                aof.pattanapon@gmail.com
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: "all" }}
              className=" flex items-center gap-10 flex-col md:flex-row"
            >
              <Github
                className=" text-background bg-foreground rounded-full w-14 h-14 p-2 hover:bg-background hover:text-foreground transition-all duration-300 cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/pattanaponcws", "_blank")
                }
              />
              <a
                className=" text-2xl hover:underline cursor-pointer transition-all duration-300"
                href="https://github.com/pattanaponcws"
              >
                github.com/pattanaponcws
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: "all" }}
              className=" flex items-center gap-10 flex-col md:flex-row"
            >
              <div className=" group text-background bg-foreground w-14 h-14 p-2 rounded-full flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300 cursor-pointer">
                <Linkedin
                  className="w-12 h-12 "
                  onClick={() =>
                    window.open(
                      "www.linkedin.com/in/pattanapon-chaiwongsa-6453b52a2",
                      "_blank"
                    )
                  }
                />
              </div>
              <a
                className=" text-2xl hover:underline cursor-pointer transition-all duration-300"
                href="www.linkedin.com/in/pattanapon-chaiwongsa-6453b52a2"
              >
                linkedin.com/pattanapon-chaiwongsa
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
