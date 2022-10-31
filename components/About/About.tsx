import Image from 'next/future/image';
import React from 'react';
import HaoAva from '../../public/Hao-Ava.jpg';
import { CTAButtons } from '../CTAButtons/CTAButtons';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Quotes } from '../Quotes/Quotes';

export const About = () => {
  return (
    <div className="mt-2 flex h-screen flex-col items-center justify-center">
      <SectionTitle title="about" />
      <div className="py-2 text-center font-mono text-sm leading-7 tracking-wider text-slate-400 md:text-base">
        <Quotes />
      </div>
      <div className="mx-auto flex flex-col items-center gap-6 md:max-w-[80%] md:flex-row md:shadow-2xl">
        <motion.div
          initial={{ opacity: 0, x: -200, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image
            className="h-48 w-48 rounded-full object-cover object-center md:h-auto md:max-w-sm md:basis-1/3 md:rounded-md"
            alt="Hao"
            src={HaoAva}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex h-full flex-col items-center gap-6 px-2 md:items-start md:justify-center md:gap-4 xl:text-lg"
        >
          <p className="text-center font-serif text-sm font-light leading-relaxed tracking-wide md:text-left md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            repudiandae molestias necessitatibus fugit. Aut quam quis alias
            libero sequi qui, fugiat distinctio veritatis.
          </p>
          <CTAButtons
            CTAProps={{
              btnTitle: 'Download CV',
              Icon: DocumentArrowDownIcon,
              className:
                'group rounded-md bg-gradient-purple-apple-via ring-1 ring-gradient-purple-apple-from transition-colors hover:bg-gradient-purple-apple-from hover:text-white',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
