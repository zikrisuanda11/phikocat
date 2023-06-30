import React from "react";
import {BiError} from 'react-icons/bi';

export default function Alert({ message, customClass }) {

    return (
        <div className={`rounded-md bg-red-50 p-2.5 my-1 full-width ${customClass}`}>
            <div className="flex">
                <div className="flex-shrink-0">
                    <BiError className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-xs font-medium text-red-800 pt-0.5">
                        {message}
                    </h3>
                </div>
            </div>
        </div>
    )
}