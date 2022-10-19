import React from 'react';
import { motion } from 'framer-motion';
import {
    SiTypescript,
    SiCss3,
    SiJavascript,
    SiHtml5,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiGithub,
    SiNpm,
    SiPnpm,
    SiFramer,
    SiAntdesign,
    SiPostman,
    SiFigma,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
export const Skills = () => {
    const listMotion = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 2.5,
            },
        },
    };
    const itemMotion = {
        hidden: { opacity: 0, x: -400 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="mt-2 flex h-screen flex-col items-center justify-center">
            <div className="w-full pt-6 text-center md:pb-4">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="bg-gradient-to-r from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text text-center text-2xl font-bold uppercase tracking-[15px] text-transparent dark:from-gradient-purple-apple-from dark:via-gradient-purple-apple-via dark:to-gradient-purple-apple-to"
                >
                    Skills
                </motion.h1>
            </div>
            <div className="flex flex-col gap-4 px-4">
                <div className="front-end space-y-4 rounded-lg p-2 shadow-2xl md:p-4">
                    <motion.h2
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="hover:shadow-highlight-blue inline-block font-bold tracking-widest md:text-xl"
                    >
                        Front-End:
                    </motion.h2>
                    <motion.ul
                        variants={listMotion}
                        initial={'hidden'}
                        whileInView={'visible'}
                        className="flex flex-row flex-wrap gap-2 md:gap-8"
                    >
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiHtml5 className="transition-md:transform h-6 w-6 fill-[#e34f26] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                HTML
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiCss3 className="transition-md:transform h-6 w-6 fill-[#264de4] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                CSS
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiJavascript className="transition-md:transform h-6 w-6 fill-[#f7df1e] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                JavaScript
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiTypescript className="transition-md:transform h-6 w-6 fill-[#3178c6] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                TypeScript
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiReact className="transition-md:transform h-6 w-6 fill-[#00d8ff] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                ReactJS
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiRedux className="transition-md:transform h-6 w-6 fill-[#764abc] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Redux
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiTailwindcss className="transition-md:transform h-6 w-6 fill-[#38bdf8] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Tailwind
                            </span>
                        </motion.li>
                    </motion.ul>
                </div>
                <div className="back-end space-y-4 rounded-lg p-2 shadow-2xl md:p-4">
                    <motion.h2
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="hover:shadow-highlight-blue inline-block font-bold tracking-widest md:text-xl"
                    >
                        Back-End:
                    </motion.h2>
                    <motion.ul
                        variants={listMotion}
                        initial={'hidden'}
                        whileInView={'visible'}
                        className="flex flex-row flex-wrap gap-2 md:gap-8"
                    >
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <TbBrandNextjs className="h-6 w-6 md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                NextJS
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiNodedotjs className="h-6 w-6 fill-[#215732] md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                NodeJS
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiExpress className="h-6 w-6 md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                ExpressJS
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiMongodb className="h-6 w-6 fill-[#589636] md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                MongoDB
                            </span>
                        </motion.li>
                    </motion.ul>
                </div>
                <div className="Others space-y-4 rounded-lg p-2 shadow-2xl md:p-4">
                    <motion.h2
                        transition={{ duration: 1.2 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="hover:shadow-highlight-blue inline-block text-lg font-bold tracking-widest md:text-xl"
                    >
                        Others:
                    </motion.h2>
                    <motion.ul
                        variants={listMotion}
                        initial={'hidden'}
                        whileInView={'visible'}
                        className="flex flex-row flex-wrap gap-2 md:gap-8"
                    >
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiGit className="h-6 w-6 fill-[#fc6d26] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Git
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiGithub className="h-6 w-6 fill-[#333] dark:fill-[#fafafa] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                GitHub
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiNpm className="h-6 w-6 fill-[#cb3837] md:h-10 md:w-10 md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Npm
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiPnpm className="h-6 w-6 fill-[#f69220] md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                PNpm
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiFramer className="h-6 w-6 fill-[#333] dark:fill-[#fafafa] md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Framer <br /> Motion
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiAntdesign className="h-6 w-6 fill-[#0D6FFF] md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Ant <br />
                                Design
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiPostman className="h-6 w-6 fill-[#ef5b25] md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Postman
                            </span>
                        </motion.li>
                        <motion.li
                            variants={itemMotion}
                            className="group flex flex-col items-center gap-1 transition-transform md:motion-safe:hover:scale-110 md:motion-safe:focus:scale-110"
                        >
                            <SiFigma className="h-6 w-6 fill-[#333] dark:fill-[#fafafa] md:h-10 md:w-10  md:motion-safe:group-hover:scale-110 lg:h-16 lg:w-16 " />
                            <span className="text-center text-sm italic tracking-wide dark:text-gray-400 md:motion-safe:group-hover:scale-110">
                                Figma
                            </span>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};
