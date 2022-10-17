import React from 'react';
import Image from 'next/future/image';
import HaoAvaMemoji from '../../public/img/ava/Hao-Ava-Memoji.png';
import { motion } from 'framer-motion';
const Avatar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-24"
        >
            <Image className="h-auto w-full" alt="Hao" src={HaoAvaMemoji} />
        </motion.div>
    );
};

export default Avatar;
