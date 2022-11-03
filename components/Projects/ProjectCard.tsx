import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import { CodeBracketIcon, TvIcon } from '@heroicons/react/24/outline';
import { TProject } from '../../types';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from '../../sanity';

type Props = {
  project: TProject;
  index: number;
  total: number;
};

export const ProjectCard = ({ project, index, total }: Props) => {
  const {
    projectName,
    projectSummary,
    projectGitHub,
    projectLiveLink,
    projectImage,
  } = project;
  const imageProps = useNextSanityImage(sanityClient, projectImage);
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 md:gap-4">
      <h3 className="font-bold tracking-widest underline underline-offset-8 lg:hidden">
        Case study: {index + 1} of {total}
      </h3>
      <h2 className="text-center text-xl font-bold capitalize tracking-widest lg:hidden lg:py-2 lg:text-3xl">
        {projectName}
      </h2>
      <div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="h-44 w-full overflow-hidden md:h-[400px]"
        >
          <Image
            className="h-full w-full rounded-lg object-fill object-center"
            alt={projectName}
            {...imageProps}
          ></Image>
        </motion.div>
        <h2 className="hidden text-center text-xl font-bold capitalize tracking-widest lg:block lg:py-4 lg:text-3xl">
          {projectName}
        </h2>
        <p className="pt-1 text-center text-sm text-slate-400 md:text-base lg:px-4 lg:py-4 lg:text-lg">
          {projectSummary}
        </p>
      </div>
      <div className="flex gap-2 py-2">
        <div className="h-full">
          <a
            className="flex items-center gap-2 rounded-md p-2 underline decoration-gradient-purple-apple-from underline-offset-4 motion-safe:hover:scale-110"
            target={'_blank'}
            rel="noopener noreferrer"
            href={projectGitHub}
            title="Source code"
          >
            <CodeBracketIcon className="hidden h-4 w-4 md:block" />
            <p className="capitalize">source code</p>
          </a>
        </div>
        <div>
          <a
            href={projectLiveLink}
            title="Live Demo"
            className="flex items-center gap-2 rounded-md p-2 underline decoration-gradient-purple-apple-from underline-offset-4 motion-safe:hover:scale-110"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <TvIcon className="hidden h-4 w-4 md:block" />
            <p className="capitalize">live demo</p>
          </a>
        </div>
      </div>
    </div>
  );
};
