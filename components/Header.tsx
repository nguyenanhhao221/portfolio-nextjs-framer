import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Toggle from './utils/Toggle';

export const Header = () => {
    return (
        <header className="sticky top-0 flex items-center px-4">
            <div className="flex w-full items-center justify-between gap-2 xl:max-w-[80%]">
                <motion.div
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="social-medias flex gap-1"
                >
                    <SocialIcon
                        fgColor="gray"
                        bgColor="transparent"
                        className="motion-safe:hover:animate-bounce motion-safe:focus:animate-bounce"
                        url="https://www.facebook.com/haonguyen11295"
                    />
                    <SocialIcon
                        fgColor="gray"
                        bgColor="transparent"
                        className="motion-safe:hover:animate-bounce motion-safe:focus:animate-bounce"
                        url="https://www.linkedin.com/in/haonguyen-5a08321a9/"
                    />

                    <SocialIcon
                        className="motion-safe:hover:animate-bounce motion-safe:focus:animate-bounce"
                        fgColor="gray"
                        bgColor="transparent"
                        url="https://www.github.com/nguyenanhhao221"
                    />
                    <SocialIcon
                        className="motion-safe:hover:animate-bounce motion-safe:focus:animate-bounce"
                        fgColor="gray"
                        bgColor="transparent"
                        url="https://www.twitter.com/nguyenanhhao221"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 1 }}
                    className="darkMode-toggle"
                >
                    <Toggle />
                </motion.div>
            </div>
        </header>
    );
};
