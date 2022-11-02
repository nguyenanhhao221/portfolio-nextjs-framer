import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  status: { success: boolean; message: string };
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  openPopup: boolean;
};

export const Popup = ({ status, setOpenPopup, openPopup }: Props) => {
  const { message, success } = status;
  return openPopup ? (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed inset-0 grid grid-cols-1 place-content-center backdrop-blur-sm"
      onClick={(e) => {
        if (e.currentTarget.id !== 'popupModal') {
          return setOpenPopup(false);
        }
      }}
    >
      <div className="mx-auto w-[80%] rounded-xl border border-gray-600 bg-gray-900 bg-opacity-40 shadow-2xl md:w-[50%]">
        <>
          <div className="flex justify-end p-1" id="popupModal">
            <button
              type="button"
              title="Close Popup"
              onClick={() => setOpenPopup(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 py-10 text-center">
            {success ? (
              <CheckCircleIcon className="h-12 w-12 stroke-green-500 md:h-20 md:w-20" />
            ) : (
              <XCircleIcon className="h-12 w-12 stroke-red-500 md:h-20 md:w-20" />
            )}
            <p className="text-lg font-semibold capitalize leading-10 tracking-wider">
              {message ? message : ''}
            </p>
          </div>
        </>
      </div>
    </motion.div>
  ) : (
    <></>
  );
};
