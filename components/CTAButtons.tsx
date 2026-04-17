import Link from 'next/link';
import React from 'react';

type Props = {
  btnTitle: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  className: string;
};

//TODO update correct link for button
export const CTAButtons = ({ href, btnTitle, Icon, className }: Props) => {
  return (
    <button type="button" className={className}>
      <Link href={href} passHref>
        <div className="flex flex-row items-center gap-2 px-4 py-2">
          {Icon && <Icon className={`h-6 w-6 animate-bounce`} />}
          <span className="text-sm md:text-base">{btnTitle}</span>
        </div>
      </Link>
    </button>
  );
};
