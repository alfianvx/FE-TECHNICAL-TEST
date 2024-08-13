import React, { useState, useEffect, useRef, KeyboardEvent } from "react";

import { Link } from "react-router-dom";
import Button from "./button";
import { SignOut } from "../service/auth";

export default function Dropdown({
  title,

  setSelectedOption,
}) {
  const [open, setOpen] = useState(false);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleKeyDown(event) {
    if (event.key === "ArrowDown" && highlightedIndex < options.length - 1) {
      setHighlightedIndex((prev) => prev + 1);
    } else if (event.key === "ArrowUp" && highlightedIndex > 0) {
      setHighlightedIndex((prev) => prev - 1);
    } else if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission

      if (highlightedIndex >= 0 && highlightedIndex < options.length) {
        setSelectedOption(options[highlightedIndex]);

        setOpen(false);
      }
    }
  }

  function handleOptionKeyDown(event, index) {
    if (event.key === "Enter") {
      setSelectedOption(options[index]);

      setOpen(false);
    }
  }

  return (
    <div className="relative max-w-6xl" ref={dropdownRef}>
      <Button
        title={title}
        variant="primary"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className="px-10 py-2 my-3 font-medium text-white transition-colors duration-300 ease-in-out bg-indigo-600 rounded-sm hover:bg-indigo-500"
      />

      {open && (
        <div className="absolute right-0 flex flex-col w-32 bg-white border border-black rounded-sm top-10">
          <button
            onClick={() => {
              setOpen(false);
            }}
            onKeyDown={(event) => handleOptionKeyDown(event, index)}
            className="px-4 py-2 text-center hover:text-indigo-600"
          >
            <Link to="/profile">Profile</Link>
          </button>
          <button
            onClick={() => {
              SignOut();
              setOpen(false);
            }}
            onKeyDown={(event) => handleOptionKeyDown(event, index)}
            className="px-4 py-2 text-center hover:text-indigo-600"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
