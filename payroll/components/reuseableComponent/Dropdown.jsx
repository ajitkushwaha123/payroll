"use client";
import React, { useState } from "react";

const Dropdown = ({ title, data, onInputChange, value , editable=true}) => {
  const [selected, setSelected] = useState(value);

  console.log("selected", selected);

  const handleInputChange = (e) => {
    setSelected(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div className="mt-4">
      <label
        htmlFor={title}
        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
      >
        {title}
      </label>
      {editable === true ? (
        <select
          id={title}
          name={title}
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          value={selected}
          onChange={(e) => handleInputChange(e)}
        >
          <option value={title}>Select {title}</option>
          {data?.map((item, index) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      ) : (
        <select
          id={title}
          name={title}
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          value={selected}
          disabled
          onChange={(e) => handleInputChange(e)}
        >
          <option value={title}>Select {title}</option>
          {data?.map((item, index) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
