import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
export const Navbar = () => {
  return (
    <m.nav
      className="mt-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <ul className="flex items-center justify-evenly gap-3  text-center text-sm capitalize">
        <li className="nav-link">
          <Link href={'#about'}>about </Link>
        </li>
        <li className="nav-link">
          <Link href={'#projects'}>projects</Link>
        </li>
        <li className="nav-link">
          <Link href={'#skills'}>skills</Link>
        </li>
        <li className="nav-link">
          <Link href={'#contact'}>contact</Link>
        </li>
      </ul>
    </m.nav>
  );
};
