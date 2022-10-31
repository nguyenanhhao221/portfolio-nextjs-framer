import {
  SiTypescript,
  SiCss3,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNpm,
  SiPnpm,
  SiFramer,
  SiPostman,
  SiFigma,
  SiPrisma,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
export const skillsData = [
  {
    name: 'front end',
    details: [
      { name: 'HTML', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', Icon: SiCss3, color: '#264de4' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'React', Icon: SiReact, color: '#00d8ff' },
      { name: 'Redux', Icon: SiRedux, color: '#764abc' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#38bdf8' },
    ],
  },
  {
    name: 'back end',
    details: [
      { name: 'NextJS', Icon: TbBrandNextjs, color: '#fff' },
      { name: 'NodeJS', Icon: SiNodedotjs, color: '#215732' },
      { name: 'Prisma', Icon: SiPrisma, color: '#fff' },
      { name: 'Express', Icon: SiExpress, color: '#fff' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#589636' },
    ],
  },
  {
    name: 'others',
    details: [
      { name: 'Git', Icon: SiGit, color: '#cb3837' },
      { name: 'GitHub', Icon: SiGithub, color: '#fafafa' },
      { name: 'NPM', Icon: SiNpm, color: '#cb3837' },
      { name: 'PNPM', Icon: SiPnpm, color: '#f69220' },
      { name: 'Framer Motion', Icon: SiFramer, color: '#fff' },
      { name: 'Postman', Icon: SiPostman, color: '#ef5b25' },
      { name: 'Figma', Icon: SiFigma, color: '#cb3837' },
    ],
  },
];
