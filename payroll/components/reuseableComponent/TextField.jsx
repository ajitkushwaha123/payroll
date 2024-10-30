"use client";
import React , { useState } from 'react'

const TextField = ({ title, type, input, onInputChange , editable=true }) => {
  const [value, setValue] = useState(input);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onInputChange(newValue);
  };

  return (
    <div>
      <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          {title}
        </label>
        {editable == true ? (
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type={type}
            onChange={handleInputChange}
            value={value}
          />
        ) : (
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type={type}
            onChange={handleInputChange}
            value={value}
            readOnly
          />
        )}
      </div>
    </div>
  );
};

export default TextField
