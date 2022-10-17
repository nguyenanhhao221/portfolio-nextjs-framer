import React from 'react';
import { motion } from 'framer-motion';
const BackgroundCircles = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.7, 0.2, 1],
                borderRadius: ['20%', '20%', '50%', '80%', '20%'],
            }}
            transition={{
                duration: 2.5,
            }}
            className="relative -z-10 flex items-center justify-center"
        >
            <div className="absolute z-0 h-[200px] w-[200px] animate-ping rounded-full border border-gray-500  "></div>
            <div className="absolute z-0 h-[300px] w-[300px] rounded-full border border-gray-600 opacity-30 "></div>
            <div className="absolute z-0 h-[500px] w-[500px] rounded-full border border-gray-600 opacity-30"></div>
            <div className="absolute z-0 h-[300px] w-[300px] animate-pulse rounded-full border border-5b-yellow opacity-20  md:h-[650px] md:w-[650px]"></div>
            <div className="absolute z-0 h-[700px] w-[700px] animate-pulse rounded-full border border-gradient-blue-apple-to opacity-30 sm:h-[800px] sm:w-[800px] "></div>
        </motion.div>
    );
};

export default BackgroundCircles;
