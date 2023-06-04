import React from "react";
import { MdDateRange } from 'react-icons/md';

export default function Type1({ title, icon1, icon2, icon3, content1, content2, content3, information1, information2, information3 }) {
  return (
    <div
      className="rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8"
    >
      <div className=" text-gray-500">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          {title}
        </h3>

        <div className="mt-2">

          <div className="flex justify-between border-b pb-2 m-3 items-center">
            <div className="flex gap-1 text-gray-400 items-center">
              {icon1}
              {content1}
            </div>
            {information1}
          </div>
          <div className="flex justify-between border-b pb-2 m-3 items-center">
            <div className="flex gap-1 text-gray-400">
              {icon2}
              {content2}
            </div>
            {information2}
          </div>
          <div className="flex justify-between border-b pb-2 m-3 items-center">
            <div className="flex gap-1 text-gray-400">
              {icon3}
              {content3}
            </div>
            {information3}
          </div>
        </div>
      </div>
    </div>
  )
}