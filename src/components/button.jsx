import React from "react";

export default function Button({ type, title, variant, onClick, isLoading }) {
  const buttonVariant =
    variant === "primary" ? "bg-indigo-600 hover:bg-indigo-500" : "";

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="px-4 py-2 text-xs font-medium text-white transition-colors duration-300 ease-in-out rounded-sm bg-stone-900 hover:bg-stone-700 md:text-sm dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-300 focus:outline-none"
      type={type}
    >
      {title}
    </button>
  );
}
