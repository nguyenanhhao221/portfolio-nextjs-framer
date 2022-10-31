import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import HuluDisplayImg from '../../public/HuluDisplayImg.png';
import LinkShortImg from '../../public/LinkShortImg.png';
import CryptoverseImg from '../../public/cryptoverse.png';
import PortFolioImg from '../../public/portfolioImg.png';
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
      deployment: 'https://hulu.haonguyen.tech',
    },
  },
  {
    id: 'cryptoverse',
    name: 'Cryptoverse',
    image: CryptoverseImg,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dicta explicabo optio alias a ratione, provident doloribus voluptatum neque non ab quidem animi, eveniet accusantium facere aliquid accusamus sit?',
    links: {
      github: 'https://github.com/nguyenanhhao221/crypto-app-nextjs',
      deployment: 'https://cryptoverse.haonguyen.tech',
    },
  },
  {
    id: 'short-link',
    name: 'Link Shortener',
    image: LinkShortImg,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dicta explicabo optio alias a ratione, provident doloribus voluptatum neque non ab quidem animi, eveniet accusantium facere aliquid accusamus sit?',
    links: {
      github: 'https://github.com/nguyenanhhao221/link-shortener',
      deployment: 'https://links.haonguyen.tech',
    },
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    image: PortFolioImg,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dicta explicabo optio alias a ratione, provident doloribus voluptatum neque non ab quidem animi, eveniet accusantium facere aliquid accusamus sit?',
    links: {
      github: 'https://github.com/nguyenanhhao221/portfolio-nextjs-framer',
      deployment: 'https://haonguyen.tech',
    },
  },
]);

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-10 lg:pt-12">
      <SectionTitle title="Projects" />
      <div>
        <p className="py-2 text-center text-xs leading-4 text-slate-400 lg:text-base ">
          Here are some of my highlighted projects. For more, please consider
          visit my{' '}
          <a
            className="font-bold underline decoration-fuchsia-500 underline-offset-4"
            target="_blank"
            href="https://github.com/nguyenanhhao221"
            rel="noopener noreferrer"
            title="Visit Github"
          >
            GitHub Profile
          </a>
        </p>
      </div>
      <div className="carousel w-full lg:flex lg:cursor-default lg:place-content-center">
        <motion.ul className="inner-carousel flex w-full snap-x snap-mandatory gap-4 overflow-y-hidden overflow-x-scroll overscroll-x-contain py-2 scrollbar-hide lg:grid lg:w-[80%] lg:grid-cols-2 lg:place-content-center lg:gap-16 lg:overflow-y-visible">
          {allProjects.map((project, index) => (
            <motion.li
              key={project.id}
              className="w-full flex-shrink-0 snap-center snap-always rounded-lg shadow-2xl transition-transform lg:border lg:border-slate-400 lg:border-opacity-30 lg:motion-safe:hover:border-opacity-100"
            >
              <ProjectCard
                total={allProjects.length}
                project={project}
                index={index}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
