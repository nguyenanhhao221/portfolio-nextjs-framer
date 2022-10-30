import React from 'react';
import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiCss3,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNpm,
  SiPnpm,
  SiFramer,
  SiPostman,
  SiFigma,
  SiPrisma,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SectionTitle } from '../SectionTitle/SectionTitle';
export const Skills = () => {
  const listMotion = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 2.5,
      },
    },
  };
  const itemMotion = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-2 flex h-screen flex-col items-center justify-center">
      <SectionTitle title="Skills" />
      <div className="flex flex-col gap-4 px-4">
        <div className="front-end space-y-4 rounded-lg p-2 shadow-2xl md:p-4">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="hover:shadow-highlight-blue inline-block font-bold tracking-widest md:text-xl"
          >
            Front-End:
          </motion.h2>
          <motion.ul
            variants={listMotion}
            initial={'hidden'}
            whileInView={'visible'}
            className="flex flex-row flex-wrap gap-2 md:gap-8"
          >
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiHtml5 className="h-6 w-6 fill-[#e34f26] transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                HTML
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiCss3 className="h-6 w-6 fill-[#264de4] transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                CSS
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiJavascript className="h-6 w-6 fill-[#f7df1e] transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                JavaScript
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiTypescript className="h-6 w-6 fill-[#3178c6] transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                TypeScript
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiReact className="h-6 w-6 fill-[#00d8ff] transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                ReactJS
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiRedux className="h-6 w-6 fill-[#764abc] transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Redux
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiTailwindcss className="h-6 w-6 fill-[#38bdf8] transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Tailwind
              </span>
            </motion.li>
          </motion.ul>
        </div>
        <div className="back-end space-y-4 rounded-lg p-2 shadow-2xl md:p-4">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="hover:shadow-highlight-blue inline-block font-bold tracking-widest md:text-xl"
          >
            Back-End:
          </motion.h2>
          <motion.ul
            variants={listMotion}
            initial={'hidden'}
            whileInView={'visible'}
            className="flex flex-row flex-wrap gap-2 md:gap-8"
          >
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <TbBrandNextjs className="h-6 w-6 md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                NextJS
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiNodedotjs className="h-6 w-6 fill-[#215732] md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                NodeJS
              </span>
            </motion.li>

            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiPrisma className="h-6 w-6 fill-[#ffff] md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Prisma
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiExpress className="h-6 w-6 md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                ExpressJS
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiMongodb className="h-6 w-6 fill-[#589636] md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                MongoDB
              </span>
            </motion.li>
          </motion.ul>
        </div>
        <div className="Others space-y-4 rounded-lg p-2 shadow-2xl md:p-4">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="hover:shadow-highlight-blue inline-block text-lg font-bold tracking-widest md:text-xl"
          >
            Others:
          </motion.h2>
          <motion.ul
            variants={listMotion}
            initial={'hidden'}
            whileInView={'visible'}
            className="flex flex-row flex-wrap gap-2 md:gap-8"
          >
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiGit className="h-6 w-6 fill-[#fc6d26] md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Git
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiGithub className="h-6 w-6 fill-[#333] dark:fill-[#fafafa] md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                GitHub
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiNpm className="h-6 w-6 fill-[#cb3837] md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Npm
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiPnpm className="h-6 w-6 fill-[#f69220] md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                PNpm
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiFramer className="h-6 w-6 fill-[#333] dark:fill-[#fafafa] md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Framer <br /> Motion
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiPostman className="h-6 w-6 fill-[#ef5b25] md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Postman
              </span>
            </motion.li>
            <motion.li
              variants={itemMotion}
              className="group flex flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:hover:scale-125 md:motion-safe:focus:scale-125"
            >
              <SiFigma className="h-6 w-6 fill-[#333] dark:fill-[#fafafa] md:h-10 md:w-10  md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16 " />
              <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-125">
                Figma
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};
