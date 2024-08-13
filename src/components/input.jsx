import React, { useState } from "react";

export default function Input({ name, type, value }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col my-3 space-y-2">
      <label htmlFor={name} className="dark:text-white">
        {name}
      </label>
      <input
        required
        type={type}
        id={name}
        name={name.toLowerCase()}
        value={inputValue}
        onChange={handleChange}
        className="w-full p-2 bg-white border border-black focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
      />
    </div>
  );
}
