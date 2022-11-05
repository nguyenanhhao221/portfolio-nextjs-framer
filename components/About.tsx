import Image from 'next/future/image';
import React from 'react';
import HaoAva from '../public/Hao-Ava.jpg';
import { CTAButtons } from './CTAButtons';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Quotes } from './Quotes';

export const About = () => {
  return (
    <div className="mt-2">
      <SectionTitle title="about me" />
      <div className="py-2 text-center font-mono text-sm leading-7 tracking-wider text-slate-400 md:py-6 lg:text-base">
        <Quotes />
      </div>
      <div className="mx-auto h-full gap-6 md:relative md:z-0 md:grid md:max-w-[80%] md:grid-cols-3 md:flex-row md:rounded-lg md:border md:border-stone-900 md:shadow-2xl lg:grid-cols-3 xl:max-w-[70%]">
        <div className="img-bg-blur-desktop absolute -z-10 hidden h-full w-full animate-pulse rounded-md bg-gradient-to-tl from-gradient-blue-apple-via to-gradient-purple-apple-to opacity-50 blur-3xl md:flex md:items-center">
          <div className="h-1/2 w-full bg-black bg-opacity-70"></div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [200, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative flex h-full flex-col items-center justify-center md:static"
        >
          <div className="img-bg-blur-mobile -z-1 absolute h-52 w-52 animate-pulse rounded-full bg-gradient-to-tr from-gradient-blue-apple-via to-gradient-purple-apple-to opacity-50 blur-3xl md:hidden md:h-0 md:w-0"></div>
          <Image
            className="h-32 w-32 rounded-full object-cover object-center backdrop-blur-md sm:h-48 sm:w-48 md:h-full md:w-full md:self-end md:rounded-md"
            alt="Hao"
            src={HaoAva}
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex h-full flex-col items-center gap-6 py-1 px-2 md:col-span-2 md:items-start md:justify-center md:gap-4 md:py-4  xl:text-lg"
        >
          <p className="text-center font-serif text-xs font-light sm:text-sm md:max-w-[90%] md:text-left md:leading-[25px] lg:text-lg xl:leading-[40px]">
            I&apos;m a 27 years old Front-End Developer based in Vietnam. 🇻🇳
            <br />I have been falling in love with coding ever since I found out
            the amazing things you can do with just a few line of code.
            <br />
            That feeling of seeing everything coming to life in the browser from
            your idea after hours of working and debugging is something that is
            so addicted.
            <br />
            Anyways, thank you so much for visiting my portfolio, you can find
            some of my works below. And if you ever fancy a quick chat, I&apos;m
            always just one
            <a
              className="text-sky-500 hover:underline hover:underline-offset-4 "
              href={'#contact'}
            >
              {' '}
              click{' '}
            </a>
            away
          </p>
          <CTAButtons
            btnTitle="My Projects"
            href="#projects"
            Icon={ArrowDownCircleIcon}
            className="group rounded-md bg-gradient-purple-apple-via text-center ring-1 ring-gradient-purple-apple-from transition-colors hover:bg-gradient-purple-apple-from hover:text-white"
          />
        </motion.div>
      </div>
    </div>
  );
};
