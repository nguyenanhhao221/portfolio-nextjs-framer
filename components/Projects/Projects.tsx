import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import { ProjectType } from '../../types';
import { z } from 'zod';
type Props = {
  projectData: z.infer<typeof ProjectType>[];
};

export const Projects = ({ projectData }: Props) => {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 pt-10 lg:pt-12">
      <SectionTitle title="Projects" />
      <div>
        <p className="py-2 text-center text-xs leading-4 text-slate-400 lg:text-base ">
          Here are some of my highlighted projects. For more, please consider
          visit my{' '}
          <a
            className="font-bold underline decoration-fuchsia-500 underline-offset-4 transition-colors hover:text-white"
            target="_blank"
            href="https://github.com/nguyenanhhao221"
            rel="noopener noreferrer"
            title="Visit Github"
          >
            GitHub Profile
          </a>
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="carousel w-full lg:flex lg:justify-center"
      >
        <ul className="inner-carousel flex w-full snap-x snap-mandatory gap-4 overflow-y-hidden overflow-x-scroll overscroll-x-contain py-2  scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gradient-purple-apple-via lg:grid lg:grid-cols-2 lg:place-content-center lg:gap-16 xl:grid-cols-2 2xl:grid-cols-3">
          {projectData.map((project, index) => (
            <li
              key={project._id}
              className="w-full flex-shrink-0 snap-center snap-always rounded-lg shadow-2xl transition-transform lg:border lg:border-slate-400 lg:border-opacity-30 lg:motion-safe:hover:border-opacity-100"
            >
              <ProjectCard
                total={projectData.length}
                project={project}
                index={index}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
