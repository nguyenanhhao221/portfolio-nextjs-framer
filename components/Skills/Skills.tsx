import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { skillsData } from '../../helpers/skillsIcons';

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
    <div className="mt-2 flex flex-col items-center justify-center">
      <SectionTitle title="Skills" />
      <div className="md:gap:4 flex flex-col gap-2 sm:px-4">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="front-end space-y-4 rounded-lg p-2 shadow-2xl md:p-4"
          >
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="hover:shadow-highlight-blue inline-block font-bold capitalize tracking-widest md:text-xl"
            >
              {skill.name}:
            </motion.h2>
            <motion.ul
              variants={listMotion}
              initial={'hidden'}
              whileInView={'visible'}
              exit={{ opacity: 0 }}
              className="flex flex-row flex-wrap justify-center gap-1 sm:gap-2 md:gap-8 lg:gap-12"
            >
              {skill.details.map(({ name, Icon, color }) => (
                <motion.li
                  key={name}
                  variants={itemMotion}
                  className="group flex w-14 flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:focus:scale-125 md:motion-safe:hover:scale-125"
                >
                  <Icon
                    className={`h-6 w-6 transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16`}
                    color={color}
                  />
                  <span className="break-words text-center text-xs italic tracking-wide dark:text-gray-400 md:text-sm md:motion-safe:group-hover:scale-125">
                    {name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </div>
  );
};
