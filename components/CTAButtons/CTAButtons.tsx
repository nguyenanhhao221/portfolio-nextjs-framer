import Link from 'next/link';
import React from 'react';
type Props = {
  CTAProps: {
    btnTitle: string;
    Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    className: string;
  };
};
//TODO update correct link for button
export const CTAButtons = ({
  CTAProps: { btnTitle, Icon, className },
}: Props) => {
  return (
    <button type="button" className={className}>
      <Link href={'/'} passHref>
        <div className="flex flex-row items-center gap-2 py-2 px-4">
          {Icon && (
            <Icon
              className={`h-4 w-4 motion-safe:group-hover:animate-bounce`}
            />
          )}
          <span className="text-sm md:text-base">{btnTitle}</span>
        </div>
      </Link>
    </button>
  );
};
