import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
export const Navbar = () => {
    return (
        <motion.nav
            className="mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <ul className="flex items-center justify-evenly gap-3  text-center text-sm capitalize">
                <li className="p-1 text-center hover:border-b focus:border-b dark:text-gray-400">
                    <Link href={'#about'}>about </Link>
                </li>
                <li className="p-1 text-center hover:border-b focus:border-b dark:text-gray-400">
                    <Link href={'#skills'}>skills</Link>
                </li>
                <li className="p-1 text-center hover:border-b focus:border-b dark:text-gray-400">
                    <Link href={'#projects'}>projects</Link>
                </li>
                <li className="p-1 text-center hover:border-b focus:border-b dark:text-gray-400">
                    <Link href={'#experience'}>experience</Link>
                </li>
            </ul>
        </motion.nav>
    );
};
