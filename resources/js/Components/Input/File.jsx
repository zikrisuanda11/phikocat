import React from "react";
import { BiCloudUpload } from 'react-icons/bi';

export default function File({ id, value, onChange, customClass }) {
  return (
    <div className={`w-full ${customClass}`}>
      <input
        onChange={onChange}
        id={id}
        type="file"
        className="hidden appearance-none"
      />
      <label htmlFor={id} className="cursor-pointer border py-2 px-4 rounded flex gap-2">
        <BiCloudUpload size={22} />
        Upload File
        {value && (
          <span className="text-gray-500"> {value.name}</span>
        )}
      </label>
    </div>
  )
}