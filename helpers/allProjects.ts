import HuluDisplayImg from '../public/HuluDisplayImg.png';
import LinkShortImg from '../public/LinkShortImg.png';
import CryptoverseImg from '../public/cryptoverse.png';
import PortFolioImg from '../public/portfolioImg.png';
import { z } from 'zod';
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
export const allProjects = z.array(TProjectType).parse([
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
