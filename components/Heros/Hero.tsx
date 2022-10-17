import { motion } from 'framer-motion';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Navbar } from '../Navbar/Navbar';
import TypeWriter from '../TypeWriter';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-1 overflow-hidden text-center">
            <Avatar />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="bg-gradient-to-l from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text text-xl font-extrabold uppercase tracking-widest text-transparent md:text-3xl md:tracking-[13px]">
                    Hao Nguyen
                    <br />
                    <span className="bg-gradient-to-r from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text tracking-wide">
                        Front-end Developer
                    </span>
                </h1>
            </motion.div>
            <BackgroundCircles />
            <TypeWriter />
            <Navbar />
        </div>
    );
};

export { Hero };
