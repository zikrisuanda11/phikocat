import React, { useState } from "react";
import Buttons from "@/Components/Buttons/Index";

export default function Modal({ isOpen, onClose, title, message, icon, actionConfirm }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const handleDismiss = () => {
    setIsDismissed(false);
    onClose();
  };

  if (!isOpen || isDismissed) {
    return null;
  }

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        role="alert"
        className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl z-10"
      >
        <div className="flex items-start gap-4">
          {icon}
          <div className="flex-1">
            <strong className="block font-medium text-gray-900">{title}</strong>

            <p className="mt-1 text-sm text-gray-700">{message}</p>
            <div className="grid gap-3 grid-cols-2 mt-5">
              <Buttons
                variant={'outlined'}
                size={'small'}
                title={'Batal'}
                backgroundColor={'#FFFFFF'}
                textColor={'#4A5568'}
                onClick={onClose}
              />
              <Buttons
                variant={'contained'}
                size={'small'}
                title={'Hapus'}
                textColor={'#B91C1C'}
                backgroundColor={'#FDE2E2'}
                onClick={actionConfirm}
              />
            </div>
          </div>

          <button
            className="text-gray-500 transition hover:text-gray-600"
            onClick={handleDismiss}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="fixed inset-0 backdrop-brightness-50 backdrop-blur-sm"
        onClick={handleDismiss}
      ></div>
    </div>

  );
}
