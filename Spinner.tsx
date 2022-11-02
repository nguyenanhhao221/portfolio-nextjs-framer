import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

export const Spinner = () => {
  return (
    <div className="grid h-screen place-content-center ">
      <div className="flex flex-col items-center gap-4">
        <AiOutlineLoading color="#d946ef" className="h-12 w-12 animate-spin" />
        <p className="capitalize">Getting thing ready...</p>
      </div>
    </div>
  );
};
