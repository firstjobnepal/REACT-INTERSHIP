import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseStateToggle = () => {
  const { theme } = useContext(ThemeContext);
  const image = "images.jpg";

  const [active, setActive] = useState(true);
  const [changeText, setChangeText] = useState("Hide Img");

  const displayFun = () => {
    setActive(!active);
    if (active === true) {
      setChangeText("Display Img");
    } else {
      setChangeText("Hide Img");
    }
  };
  return (
    <div className={`bg-${theme} h-screen`}>
      <button
        className={`py-1 px-6 text-white font-semibold rounded-md mt-20 m-4 ${
          active ? "bg-red-400" : "bg-blue-400"
        }`}
        onClick={displayFun}
      >
        {changeText}
      </button>
      <img
        className={`${active ? "block" : "hidden"} mt-20 ml-4`}
        src={image}
        alt=""
      />
    </div>
  );
};

export default UseStateToggle;
