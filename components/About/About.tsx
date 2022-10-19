import Image from 'next/future/image';
import React from 'react';
import HaoAva from '../../public/Hao-Ava.jpg';
import { CTAButtons } from '../CTAButtons/CTAButtons';
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <motion.div className="mt-2 flex h-screen flex-col items-center justify-center">
            <div className="w-full pt-6 pb-4 text-center">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="bg-gradient-to-r from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text text-center text-2xl font-bold uppercase tracking-[15px] text-transparent dark:from-gradient-purple-apple-from dark:via-gradient-purple-apple-via dark:to-gradient-purple-apple-to"
                >
                    About
                </motion.h1>
            </div>
            <div className="mx-auto flex flex-col items-center gap-6 md:max-w-[80%] md:flex-row md:shadow-2xl">
                <motion.div
                    initial={{ opacity: 0, x: -200, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
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
                    transition={{ duration: 1.2 }}
                    className="flex h-full flex-col items-center gap-6 px-2 md:items-start md:justify-center md:gap-4 xl:text-lg"
                >
                    <p className="text-center font-serif text-sm font-light leading-relaxed tracking-wide md:text-left md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium repudiandae molestias necessitatibus fugit.
                        Aut quam quis alias libero sequi qui, fugiat distinctio
                        veritatis.
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Architecto quia hic perferendis eligendi eveniet
                        mollitia
                    </p>
                    <CTAButtons
                        CTAProps={{
                            btnTitle: 'Download CV',
                            Icon: ArrowDownOnSquareStackIcon,
                        }}
                        backHome={false}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};
