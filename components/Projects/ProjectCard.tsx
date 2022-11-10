import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/future/image';
import { CodeBracketIcon, TvIcon } from '@heroicons/react/24/outline';
import { TProject } from '../../types';
import { urlFor } from '../../lib/sanity';

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
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 md:gap-4 lg:justify-between">
      <a
        href={projectLiveLink}
        target="_blank"
        className="flex flex-col"
        rel="noreferrer noopener"
      >
        <p className="text-center font-bold tracking-widest underline underline-offset-8 lg:hidden">
          Case study: {index + 1} of {total}
        </p>
        <h2 className="inline-block p-4 text-center text-xl font-bold uppercase tracking-wide md:tracking-[10px] lg:order-2 lg:text-3xl">
          {projectName}
        </h2>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ type: 'spring', bounce: 0.4, delay: 0.3 }}
          className="h-44 w-full overflow-hidden md:aspect-[4/3] md:h-[300px] lg:order-1"
        >
          <Image
            className="h-full w-full rounded-lg object-fill object-center"
            alt={projectName}
            src={urlFor(projectImage).url()}
            width={3840}
            height={2095}
            sizes="(min-width: 1280px) 33vw,
              (min-width: 1024px) 50vw,
              100vw"
          ></Image>
        </m.div>

        <p className="pt-1 text-center text-sm text-gray-200 md:text-base lg:order-3 lg:px-4 lg:py-4 lg:text-lg">
          {projectSummary}
        </p>
      </a>
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
