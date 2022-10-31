import React from 'react';
import Image from 'next/future/image';
import { z } from 'zod';
import { TProjectType } from '../../helpers/allProjects';
import { motion } from 'framer-motion';
import { CodeBracketIcon, TvIcon } from '@heroicons/react/24/outline';
type Props = {
  project: z.infer<typeof TProjectType>;
  index: number;
  total: number;
};

export const ProjectCard = ({ project, index, total }: Props) => {
  const { description, links, name, image } = project;
  return (
    <a
      href={links.deployment}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full w-full flex-col items-center gap-2 md:gap-4"
    >
      <h3 className="font-bold tracking-widest underline underline-offset-8 lg:hidden">
        Case study: {index + 1} of {total}
      </h3>
      <h2 className="text-center text-xl font-bold capitalize tracking-widest lg:hidden lg:py-2 lg:text-3xl">
        {name}
      </h2>
      <div>
        <div className="h-44 w-full overflow-hidden md:h-[400px]">
          <Image
            className="h-full w-full rounded-lg object-fill object-center"
            alt={name}
            src={image}
            placeholder="blur"
          ></Image>
        </div>
        <h2 className="hidden text-center text-xl font-bold capitalize tracking-widest lg:block lg:py-4 lg:text-3xl">
          {name}
        </h2>
        <p className="pt-1 text-center text-sm text-slate-400 md:text-base lg:px-4 lg:py-4 lg:text-lg">
          {description}
        </p>
      </div>
      <div className="flex gap-2 py-2">
        <div className="h-full">
          <a
            className="flex items-center gap-2 rounded-md p-2 underline decoration-gradient-purple-apple-from underline-offset-4 motion-safe:hover:scale-110"
            target={'_blank'}
            rel="noopener noreferrer"
            href={links.github}
            title="Source code"
          >
            <CodeBracketIcon className="hidden h-4 w-4 md:block" />
            <p className="capitalize">source code</p>
          </a>
        </div>
        <div>
          <motion.a
            href={links.deployment}
            title="Live Demo"
            className="flex items-center gap-2 rounded-md p-2 underline decoration-gradient-purple-apple-from underline-offset-4 motion-safe:hover:scale-110"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <TvIcon className="hidden h-4 w-4 md:block" />
            <p className="capitalize">live demo</p>
          </motion.a>
        </div>
      </div>
    </a>
  );
};
