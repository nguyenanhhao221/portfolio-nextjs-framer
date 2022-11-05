import React from 'react';
import { TSkill } from '../../types';
import Image from 'next/future/image';

import { urlFor } from '../../lib/sanity';
type Props = {
  skill: TSkill;
};

export const SkillItem = ({ skill }: Props) => {
  const { link, skills, image } = skill;
  return (
    <>
      <a
        className="flex w-14 flex-col items-center gap-1 transition-transform md:gap-2 md:motion-safe:focus:scale-125 md:motion-safe:hover:scale-125"
        href={link}
        title={`Go to ${skills} homepage`}
      >
        <Image
          src={urlFor(image).url()}
          alt={`${skills}`}
          width={512}
          height={512}
          className="h-8 w-8 object-contain object-center transition-all md:h-10 md:w-10 md:motion-safe:group-hover:scale-125 lg:h-16 lg:w-16"
        />
        <span className="break-words text-center text-xs italic tracking-wide dark:text-gray-200 md:text-sm md:motion-safe:group-hover:scale-125">
          {skills}
        </span>
      </a>
    </>
  );
};
