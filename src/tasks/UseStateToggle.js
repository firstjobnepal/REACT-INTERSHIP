import React, { useState } from 'react'

const UseStateToggle
    = () => {
        let image = "images.jpg";

        let [active, setActive] = useState(true);
        let [changeText, setChangeText] = useState("Hide Img");

        let displayFun = () => {
            setActive(!active);
            if (active === true) {
                setChangeText("Display Img");
            }
            else {
                setChangeText("Hide Img")
            }
        }
        return (
            <div>
                <button className={`py-1 px-6 text-white font-semibold rounded-md mt-20 m-4 ${active ? "bg-red-400" : "bg-blue-400"}`} onClick={displayFun}>{changeText}</button>
                <img className={`${active ? "block" : "hidden"} mt-20 ml-4`} src={image} alt="" />
            </div>
        )
    }

export default UseStateToggle
