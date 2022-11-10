// import { m } from 'framer-motion';
import React from 'react';
import Avatar from '../Avatar';
import { Navbar } from '../Navbar';
import TypeWriter from './TypeWriter';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1  text-center">
      <Avatar />
      <BackgroundCircles />
      <h1 className="bg-gradient-to-l from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text text-xl font-extrabold uppercase tracking-widest text-transparent md:text-3xl md:tracking-[13px]">
        Hao Nguyen
        <br />
        <span className="bg-gradient-to-r from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text tracking-wide">
          Front-end Developer
        </span>
      </h1>
      <TypeWriter />
      <Navbar />
    </div>
  );
};

export { Hero };
