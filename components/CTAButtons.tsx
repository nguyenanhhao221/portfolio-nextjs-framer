import Link from 'next/link';
import React from 'react';

type Props = {
  btnTitle: string;
  href: string;
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  className: string;
};

//TODO update correct link for button
export const CTAButtons = ({ href, btnTitle, Icon, className }: Props) => {
  return (
    <button type="button" className={className}>
      <Link href={href} passHref>
        <div className="flex flex-row items-center gap-2 py-2 px-4">
          {Icon && <Icon className={`h-6 w-6 animate-bounce`} />}
          <span className="text-sm md:text-base">{btnTitle}</span>
        </div>
      </Link>
    </button>
  );
};
