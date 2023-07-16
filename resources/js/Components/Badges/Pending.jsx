import React from "react";
import {MdOutlinePending} from 'react-icons/md';

export default function Success({ message }) {
  return (
    <span
      className="flex w-fit items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 gap-1 text-amber-700"
    >
      <MdOutlinePending className="mt-0.5"/>
      <p className="whitespace-nowrap text-sm">{message}</p>
    </span>
  )
}