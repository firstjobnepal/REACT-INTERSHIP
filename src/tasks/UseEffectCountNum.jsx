import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseEffectCountNum = () => {
  const { theme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className={`bg-${theme} ${
        theme === "black" ? "text-white" : null
      } h-screen`}
    >
      <h1>count the number : {count}</h1>
    </div>
  );
};

export default UseEffectCountNum;
