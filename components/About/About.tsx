import Image from 'next/future/image';
import React from 'react';
import HaoAva from '../../public/Hao-Ava.jpg';
import { CTAButtons } from '../CTAButtons/CTAButtons';
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline';

export const About = () => {
    return (
        <div className="mt-2">
            <div className="pt-6 pb-4 text-center">
                <h1 className="bg-gradient-to-r from-gradient-blue-apple-from via-gradient-blue-apple-via to-gradient-blue-apple-to bg-clip-text text-center text-2xl font-bold uppercase tracking-[15px] text-transparent dark:from-gradient-purple-apple-from dark:via-gradient-purple-apple-via dark:to-gradient-purple-apple-to">
                    About Me
                </h1>
            </div>
            <div className="flex flex-col items-center justify-evenly gap-6 py-4 shadow-2xl md:flex-row md:py-0">
                <div className="h-full rounded-md px-2">
                    <Image
                        className="h-auto w-full rounded-md object-contain object-center"
                        alt="Hao"
                        src={HaoAva}
                    />
                </div>
                <div className="flex h-full flex-col items-center gap-6 px-2">
                    <p className="text-center font-serif tracking-wide md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium repudiandae molestias necessitatibus fugit.
                        Aut quam quis alias libero sequi qui, fugiat distinctio
                        veritatis. Repellendus culpa nesciunt doloremque a ipsam
                        necessitatibus?
                    </p>
                    <CTAButtons
                        CTAProps={{
                            btnTitle: 'Download CV',
                            Icon: ArrowDownOnSquareStackIcon,
                        }}
                        backHome={false}
                    />
                </div>
            </div>
        </div>
    );
};
