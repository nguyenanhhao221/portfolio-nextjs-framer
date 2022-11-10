import React from 'react';
import Image from 'next/future/image';
import HaoAvaMemoji from '../public/Hao-Ava-Memoji.png';
import { m } from 'framer-motion';

const Avatar = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 1 }}
      className="w-24"
    >
      <Image
        className="h-auto w-full"
        alt="Hao"
        sizes="40vw"
        priority
        src={HaoAvaMemoji}
        placeholder="blur"
      />
    </m.div>
  );
};

export default Avatar;
