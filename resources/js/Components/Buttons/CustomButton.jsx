import React from "react";

export default function CustomButton({ href, customClass, title, onClick, variant, type }) {

  const variantButton = {
    outlined: 'border hover:bg-slate-100',
    contained: 'bg-primary text-white hover:bg-secondary hover:text-black'
  }

  return (
    <>
      <button className={`${customClass} ${variant === 'contained' ? variantButton.contained : variantButton.outlined} hover:transition-colors transition duration-75 rounded-md font-bold flex items-center justify-center hover:secondary`}
        onClick={onClick}
        type={type}
        href={href}
      >
        {title}
      </button>
    </>
  )
}