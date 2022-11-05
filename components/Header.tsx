import React from 'react';
import { motion } from 'framer-motion';

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 w-full p-1 sm:p-4 lg:backdrop-blur-sm">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mx-auto flex w-full items-center justify-between gap-2 xl:max-w-[80%]"
      >
        <ul className="social-medias flex gap-1">
          <li className="cursor-pointer">
            <a
              target="_blank"
              title="Go to Facebook"
              href="https://facebook.com/haonguyen11295"
              rel="noopener noreferrer"
            >
              <AiFillFacebook className="h-8 w-8 fill-neutral-700 hover:fill-[#1877f2]" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              target="_blank"
              title="Go to Twitter"
              href={'https://twitter.com/haonguyen_tech'}
              rel="noopener noreferrer"
            >
              <AiFillTwitterSquare className="h-8 w-8 fill-neutral-700 hover:fill-[#1da1f2]" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href={'https://www.linkedin.com/in/haonguyen-5a08321a9/'}
              target="_blank"
              title="Go to LinkedIn"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="h-8 w-8 fill-neutral-700 hover:fill-[#0077b5]" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href={'https://github.com/nguyenanhhao221'}
              title="Go to Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="h-8 w-8 fill-neutral-700 hover:fill-[#333] dark:hover:fill-[#f5f5f5]" />
            </a>
          </li>
        </ul>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="cursor-pointer"
          title="Go to Contact"
        >
          <Link href="#contact">
            <EnvelopeIcon className="h-8 w-8 stroke-neutral-700 hover:stroke-current" />
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
};
