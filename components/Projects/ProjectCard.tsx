import React from 'react';
import Image from 'next/future/image';
import { z } from 'zod';
import { TProjectType } from './Projects';
import { CTAButtons } from '../CTAButtons/CTAButtons';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

type Props = {
  project: z.infer<typeof TProjectType>;
};

export const ProjectCard = ({ project }: Props) => {
  const { description, id, links, name, image } = project;
  return (
    <div className="flex flex-col gap-4 py-4">
      <Image alt={name} src={image}></Image>
      <div className="">
        <h2 className="text-center text-xl font-bold tracking-widest">
          {name}
        </h2>
        <p className="text-center text-slate-400">{description}</p>
      </div>
      <div className="flex">
        <CTAButtons
          backHome={false}
          CTAProps={{ btnTitle: 'Source Code', Icon: CodeBracketIcon }}
        />
        <CTAButtons
          backHome={false}
          CTAProps={{ btnTitle: 'Source Code', Icon: CodeBracketIcon }}
        />
      </div>
    </div>
  );
};
