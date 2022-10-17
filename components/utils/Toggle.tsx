import React, { useEffect } from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';

type Props = {};

const Toggle = (props: Props) => {
  //Dark mode
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme);
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <>
      <button
        className="group hover:bg-slate-300 bg-opacity-30 rounded-md p-1"
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
          className={`w-6 h-6 transition-all stroke-indigo-500 fill-indigo-500 ${
            theme === 'dark' ? `block` : `hidden`
          }`}
          onClick={() => {
            if (theme === 'dark') return setTheme('light');
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
          className={`w-6 h-6 transition-all stroke-yellow-500 fill-yellow-500 ${
            theme === 'light' ? `block` : `hidden`
          }`}
          onClick={() => {
            if (theme === 'light') return setTheme('dark');
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
