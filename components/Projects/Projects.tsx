import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import HuluDisplayImg from '../../public/HuluDisplayImg.png';
import { z } from 'zod';
import { ProjectCard } from './ProjectCard';
import { StaticImageData } from 'next/future/image';

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
  //   {
  //     id: 'cryptoverse',
  //     name: 'Cryptoverse',
  //     image: HuluDisplayImg,
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate dicta explicabo optio alias a ratione, provident doloribus voluptatum neque non ab quidem animi, eveniet accusantium facere aliquid accusamus sit?',
  //     links: {
  //       github: 'https://github.com/nguyenanhhao221/hulu-clone',
  //       deployment: 'https://projects.haonguyen.tech',
  //     },
  //   },
]);

export const Projects = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <SectionTitle title="Projects" />
      <ul>
        {allProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};
