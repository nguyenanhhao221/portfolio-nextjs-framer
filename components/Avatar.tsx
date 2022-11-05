import React from 'react';
import Image from 'next/future/image';
import HaoAvaMemoji from '../public/Hao-Ava-Memoji.png';
import { m } from 'framer-motion';

const Avatar = () => {
  return (
    <m.div
      animate={{ opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 1 }}
      className="w-24"
    >
      <Image
        className="h-auto w-full"
        alt="Hao"
        priority={true}
        src={HaoAvaMemoji}
        placeholder="blur"
      />
    </m.div>
  );
};

export default Avatar;
