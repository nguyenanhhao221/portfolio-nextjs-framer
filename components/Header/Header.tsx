import React from 'react';
import { motion } from 'framer-motion';
import { Toggle } from '../Utils/Toggle';

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 w-full p-4 backdrop-blur-sm ">
      <div className="mx-auto flex w-full items-center justify-between gap-2 xl:max-w-[80%]">
        <motion.ul
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="social-medias flex gap-1"
        >
          <motion.li className="cursor-pointer">
            <Link
              href="https://facebook.com/haonguyen11295"
              passHref
              prefetch={false}
            >
              <a
                target="_blank"
                title="Go to Facebook"
                rel="noopener noreferrer"
              >
                <AiFillFacebook className="h-8 w-8  fill-neutral-700 hover:fill-[#1877f2]" />
              </a>
            </Link>
          </motion.li>
          <motion.li className="cursor-pointer">
            <Link href={'https://twitter.com/nguyenanhhao112'} passHref>
              <a
                target="_blank"
                title="Go to Twitter"
                rel="noopener noreferrer"
              >
                <AiFillTwitterSquare className="h-8 w-8  fill-neutral-700 hover:fill-[#1da1f2]" />
              </a>
            </Link>
          </motion.li>
          <motion.li className="cursor-pointer">
            <Link
              href={'https://www.linkedin.com/in/haonguyen-5a08321a9/'}
              passHref
            >
              <a
                target="_blank"
                title="Go to LinkedIn"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="h-8 w-8  fill-neutral-700 hover:fill-[#0077b5]" />
              </a>
            </Link>
          </motion.li>
          <motion.li className="cursor-pointer">
            <Link href={'https://github.com/nguyenanhhao221'} passHref>
              <a title="Go to Github" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="h-8 w-8  fill-neutral-700 hover:fill-[#333] dark:hover:fill-[#f5f5f5]" />
              </a>
            </Link>
          </motion.li>
        </motion.ul>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1 }}
          className="darkMode-toggle"
        >
          <Toggle />
        </motion.div>
      </div>
    </header>
  );
};
