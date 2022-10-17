import Link from 'next/link';
import React from 'react';
import { Url } from 'url';
type Props = {
    CTAProps: {
        btnTitle: string;
        Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    };
    backHome: boolean;
};
export const CTAButtons = ({
    CTAProps: { btnTitle, Icon },
    backHome,
}: Props) => {
    return (
        <button
            type="button"
            className="group rounded-md bg-gradient-blue-apple-via ring-1 ring-gradient-blue-apple-from transition-colors hover:bg-gradient-blue-apple-from hover:text-white"
        >
            <Link href={'/'} passHref>
                <div className="flex flex-row items-center gap-2 p-2">
                    {Icon && (
                        <Icon
                            className={`h-4 w-4 motion-safe:group-hover:animate-bounce`}
                        />
                    )}
                    <span className="">{btnTitle}</span>
                </div>
            </Link>
        </button>
    );
};
