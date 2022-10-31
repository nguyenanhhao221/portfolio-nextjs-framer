import React from 'react';
import Image from 'next/future/image';
import { z } from 'zod';
import { TProjectType } from './Projects';
import { motion } from 'framer-motion';
import { CodeBracketIcon, TvIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  project: z.infer<typeof TProjectType>;
  index: number;
  total: number;
};

export const ProjectCard = ({ project, index, total }: Props) => {
  const { description, links, name, image } = project;
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="font-bold tracking-widest underline underline-offset-8 lg:hidden">
        Case study: {index + 1} of {total}
      </h3>
      <div className="overflow-hidden lg:h-72">
        <Image
          className="rounded-lg object-cover lg:max-h-72 "
          alt={name}
          src={image}
        ></Image>
      </div>
      <div>
        <h2 className="text-center text-xl font-bold capitalize tracking-widest lg:text-3xl">
          {name}
        </h2>
        <p className="text-center text-slate-400 lg:px-4 lg:py-4 lg:text-lg">
          {description}
        </p>
      </div>
      <div className="flex gap-2 py-2 lg:py-8">
        <div>
          <Link href={links.github} passHref title="Source code">
            <a
              className="flex items-center gap-2 rounded-md p-2 underline decoration-gradient-purple-apple-from underline-offset-4  motion-safe:hover:scale-110"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="hidden h-4 w-4 md:block" />
              <p className="capitalize">source code</p>
            </a>
          </Link>
        </div>
        <div>
          <Link href={links.deployment} passHref title="Live Demo">
            <motion.a
              className="flex items-center gap-2 rounded-md p-2 underline decoration-gradient-purple-apple-from underline-offset-4  motion-safe:hover:scale-110"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <TvIcon className="hidden h-4 w-4 md:block" />
              <p className="capitalize">live demo</p>
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
};
