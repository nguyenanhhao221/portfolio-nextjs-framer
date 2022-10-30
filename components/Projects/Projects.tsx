import React, { useRef } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import HuluDisplayImg from '../../public/HuluDisplayImg.png';
import CryptoverseImg from '../../public/cryptoverse.png';
import { z } from 'zod';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';

export const TProjectType = z.object({
  id: z.string(),
  name: z.string(),
  //TODO type correct image
  image: z.any(),
  description: z.string(),
  links: z.object({
    github: z.string().url(),
    deployment: z.string().url(),
  }),
});

//TODO think about moving this to a CMS system instead of hardcode
const allProjects = z.array(TProjectType).parse([
  {
    id: 'hulu',
    name: 'Hulu Clone',
    image: HuluDisplayImg,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dicta explicabo optio alias a ratione, provident doloribus voluptatum neque non ab quidem animi, eveniet accusantium facere aliquid accusamus sit?',
    links: {
      github: 'https://github.com/nguyenanhhao221/hulu-clone',
      deployment: 'https://projects.haonguyen.tech',
    },
  },
  {
    id: 'cryptoverse',
    name: 'Cryptoverse',
    image: CryptoverseImg,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dicta explicabo optio alias a ratione, provident doloribus voluptatum neque non ab quidem animi, eveniet accusantium facere aliquid accusamus sit?',
    links: {
      github: 'https://github.com/nguyenanhhao221/hulu-clone',
      deployment: 'https://projects.haonguyen.tech',
    },
  },
  {
    id: 'Portfolio',
    name: 'Hao Portfolio',
    image: HuluDisplayImg,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dicta explicabo optio alias a ratione, provident doloribus voluptatum neque non ab quidem animi, eveniet accusantium facere aliquid accusamus sit?',
    links: {
      github: 'https://github.com/nguyenanhhao221/hulu-clone',
      deployment: 'https://projects.haonguyen.tech',
    },
  },
]);

export const Projects = () => {
  const listRef = useRef<HTMLUListElement>(null);
  // use to scroll to item in mobile view
  function scrollToIndex(index: number) {
    const listNode = listRef.current;
    const itemList = listNode?.querySelectorAll('li')[index];
    return itemList?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <SectionTitle title="Projects" />
      <div className="carousel w-full cursor-grab lg:flex lg:cursor-default lg:place-content-center">
        {/* <div className="flex w-full items-center justify-center gap-4 py-2 lg:hidden">
          {allProjects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              onClick={() => {
                scrollToIndex(index);
              }}
              title="move to item"
              className="h-4 w-4 rounded-full bg-red-400"
            ></button>
          ))}
        </div> */}
        <motion.ul
          ref={listRef}
          className="inner-carousel flex w-full snap-x snap-mandatory gap-4 overflow-y-hidden overflow-x-scroll py-2 scrollbar-hide lg:grid lg:w-[80%] lg:grid-cols-2 lg:place-content-center lg:gap-16 lg:overflow-y-visible"
        >
          {allProjects.map((project) => (
            <motion.li
              key={project.id}
              className="w-full flex-shrink-0 cursor-pointer snap-center snap-always rounded-lg shadow-2xl transition-transform lg:border lg:border-slate-400 lg:border-opacity-30 lg:motion-safe:hover:border-opacity-100"
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
