import React from "react";

export default function WarningMessage({title, message, customClass}) {
  return (
    // <div role="alert" className={`rounded border-s-4 border-red-500 bg-red-50 p-3 mb-3 ${customClass}`}>
    //   <div className="flex items-center gap-2 text-red-800">
    //     <strong className="block font-medium"> {title} </strong>
    //   </div>

    // </div>
      <p className={`text-sm text-red-700 ${customClass}`}>
        {message}
      </p>
  )
}