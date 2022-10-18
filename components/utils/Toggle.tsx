import React, { useEffect } from 'react';
import { useState } from 'react';
import { useTheme } from 'next-themes';

const Toggle = () => {
    //Dark mode
    const { resolvedTheme, setTheme } = useTheme();
    const [mount, setMount] = useState<boolean>(false);
    useEffect(() => {
        setMount(true);
    }, []);
    if (!mount) return null;
    return (
        <>
            <button
                className="group w-10 rounded-md bg-opacity-30 p-1 hover:bg-slate-300"
                title="Toggle dark/Light mode"
                type="button"
            >
                <span className="sr-only">Toggle Dark/Light mode</span>
                {/* Moon dark */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`h-6 w-6 stroke-indigo-500 transition-all group-hover:fill-indigo-500 ${
                        resolvedTheme === 'dark' ? `block` : `hidden`
                    }`}
                    onClick={() => {
                        if (resolvedTheme === 'dark') return setTheme('light');
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                </svg>
                {/* Sun light */}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`h-6 w-6 fill-yellow-500 stroke-yellow-500 transition-all ${
                        resolvedTheme === 'light' ? `block` : `hidden`
                    }`}
                    onClick={() => {
                        if (resolvedTheme === 'light') return setTheme('dark');
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                </svg>
            </button>
        </>
    );
};

export default Toggle;
