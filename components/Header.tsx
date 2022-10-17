import Image from 'next/future/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Logo from '../public/Logo.svg';
import Toggle from './utils/Toggle';
type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="flex flex-col items-center">
      <div className="flex items-center w-full justify-between">
        <div className="social-medias flex gap-1">
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            className=""
            url="https://www.facebook.com/haonguyen11295"
          />
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.linkedin.com/in/haonguyen-5a08321a9/"
          />
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.instagram.com/haonguyen221/"
          />
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.github.com/nguyenanhhao221"
          />
        </div>
        <div className="darkMode-toggle">
          <Toggle />
        </div>
      </div>
    </header>
  );
};
