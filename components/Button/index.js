import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-stone-600 p-2 text-sm transition-all text-white rounded-lg shadow-lg ease-out hover:scale-105">
      {children}
    </button>
  );
};

export default Button;
