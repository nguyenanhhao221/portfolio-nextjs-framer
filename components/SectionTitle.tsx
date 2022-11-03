import React from 'react';
import { motion } from 'framer-motion';
type Props = {
  title: string;
};
export const SectionTitle = ({ title }: Props) => {
  return (
    <div className="w-full pt-6 text-center md:pb-4">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-gradient-to-r from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text text-center text-2xl font-bold uppercase tracking-[15px] text-transparent dark:from-gradient-purple-apple-from dark:via-gradient-purple-apple-via dark:to-gradient-purple-apple-to"
      >
        {title}
      </motion.h1>
    </div>
  );
};
