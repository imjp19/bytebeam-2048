import React from "react";

const Block = ({ number }) => {
  return (
    <div className="bg-slate-500 m-1 h-28 w-28 border-2 flex items-center justify-center text-white text-4xl rounded-lg cursor-default shadow-lg">
      {number}
    </div>
  );
};

export default Block;
