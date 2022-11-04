import React from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { SectionTitle } from '../SectionTitle';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-12 ">
      <SectionTitle title="Contact" />
      <div className=" flex flex-col items-center gap-3 text-sm leading-loose tracking-widest md:text-base">
        <h2 className="text-center text-xl duration-200 ease-in-out motion-safe:animate-bounce">
          Let{"'"}s Chat
        </h2>
        <p>
          <EnvelopeIcon className="inline h-6 w-6" />{' '}
          <a href="mailto: me@haonguyen.tech">me@haonguyen.tech</a>
        </p>
        <address className="hidden cursor-default not-italic md:block">
          <MapPinIcon className="inline h-6 w-6" />
          Ho Chi Minh City, Vietnam 🇻🇳
        </address>
      </div>
      <ContactForm />
    </div>
  );
};
