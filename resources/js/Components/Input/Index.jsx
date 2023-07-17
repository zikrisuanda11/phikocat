import React from "react";

export default function Input({ type, id, value, onChange, placeholder, customClass }) {
  return (
    <input
      required
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm ${customClass}`}
    />
  )
}