import { useState } from "react";
import Block from "../components/Block";

export default function Home() {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="bg-slate-200 p-5 shadow-xl rounded-lg">
        {data.map((row, oneIndex) => {
          return (
            <div className="flex items-center justify-center" key={oneIndex}>
              {row.map((digit, index) => (
                <Block number={digit} key={index} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
