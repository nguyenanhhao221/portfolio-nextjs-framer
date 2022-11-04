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
    <div className="mt-2 flex h-screen flex-col items-center justify-center">
      <SectionTitle title="about me" />
      <div className="py-2 text-center font-mono text-sm leading-7 tracking-wider text-slate-400 md:py-6 md:text-base">
        <Quotes />
      </div>
      <div className="mx-auto flex flex-col items-center gap-6 md:relative md:z-0 md:flex-row md:items-stretch md:rounded-lg md:border md:border-stone-900 md:shadow-2xl lg:max-w-[70%]">
        <div className="img-bg-blur absolute -z-10 h-full w-full animate-pulse rounded-md bg-gradient-to-tl from-gradient-blue-apple-via to-gradient-purple-apple-to opacity-50 blur-3xl md:flex md:items-center">
          <div className="h-1/2 w-full bg-black bg-opacity-70"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative flex h-full flex-col items-center justify-center md:static md:flex-none"
        >
          <div className="img-bg-blur -z-1 absolute h-52 w-52 animate-pulse rounded-full bg-gradient-to-tr from-gradient-blue-apple-via to-gradient-purple-apple-to opacity-50 blur-3xl md:hidden md:h-0 md:w-0"></div>
          <Image
            className="h-48 w-48 rounded-full object-cover object-center backdrop-blur-md md:h-auto md:max-w-sm md:basis-1/3 md:rounded-md"
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
          className="flex h-full flex-col items-center gap-6 px-2 md:items-start md:justify-center md:gap-4 md:py-4 lg:w-[70%] xl:text-lg"
        >
          <p className="text-center font-serif text-sm font-light leading-relaxed md:text-left md:text-base">
            I&apos;m a Front-End Developer based in Vietnam. 🇻🇳
            <br />I have been falling in love with coding ever since I found out
            the amazing things you can do with just a few line of code.
            <br />
            That feeling of seeing everything coming to life in the browser from
            your idea after hours of working and debugging is something that is
            so addicted.
            <br />
            Anyways, thank you so much for visiting my site, you can find some
            of my works below. And if you ever fancy a quick chat, I&apos;m
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
