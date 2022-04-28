import React from "react";
import { generateColors } from "../../util";

const Block = ({ number }) => {
  return (
    <div
      style={{ background: generateColors(number) }}
      className="m-2 h-28 w-28 flex items-center justify-center text-white text-4xl rounded-lg cursor-default shadow-lg">
      {number !== 0 ? number : ""}
    </div>
  );
};

export default Block;
