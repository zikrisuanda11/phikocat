import React from "react";

export default function TextArea({ id, customClass, onChange, value, placeholder }) {

  return (
    <>
      <textarea
        value={value}
        onChange={onChange}
        id={id}
        rows="4"
        className={`block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 ${customClass}`}
        placeholder={placeholder}
      />
    </>
  )
}