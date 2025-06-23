import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label,handleOnChange, type = "text", className = "", id, ...props }, ref) => {
    const inputId =
      id || `input-${label?.toLowerCase().replace(/\s+/g, "-") || Math.random()}`;

    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          ref={ref}
          className={`w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-900 text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
            transition duration-150 ease-in-out ${className}`}
          {...props} onChange={(e)=> handleOnChange(e.target.value)}
        />
      </div>
    );
  }
);

export default Input;
