import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ReadFormData = () => {
  const { theme } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState({});

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setInputValue((getValue) => {
      return {
        ...getValue,
        [name]: value,
      };
    });
  };

  const displayConsole = () => {
    console.log(inputValue);
    setInputValue({});
  };
  return (
    <>
      <div
        className={`bg-${theme} ${
          theme === "black" ? "text-white" : null
        } h-screen`}
      >
        <div className="pl-5 pt-5">
          <label htmlFor="">FirstName:</label>
          <input
            name="fname"
            value={inputValue.fname}
            onChange={inputEvent}
            placeholder="enter your first name"
            className="border-2 pl-2 ml-1 mb-4"
            type="text"
          />
          <br />
          <label htmlFor="">LastName:</label>
          <input
            name="lname"
            value={inputValue.lname}
            onChange={inputEvent}
            placeholder="enter your last name"
            className="border-2 pl-2 ml-1 mb-4"
            type="text"
          />
          <br />

          <label htmlFor="">Age:</label>
          <input
            name="age"
            value={inputValue.age}
            onChange={inputEvent}
            placeholder="enter your age"
            className="border-2 pl-2 ml-1 mb-4"
            type="number"
          />
          <br />

          <label htmlFor="">PhoneNumber:</label>
          <input
            name="phoneNumber"
            value={inputValue.phoneNumber}
            onChange={inputEvent}
            placeholder="enter your phone number"
            className="border-2 pl-2 ml-1 mb-4"
            type="number"
          />
          <br />

          <label htmlFor="">Email:</label>
          <input
            name="email"
            value={inputValue.email}
            onChange={inputEvent}
            placeholder="enter your email id"
            className="border-2 pl-2 ml-1 mb-4"
            type="email"
          />
        </div>
        <div className="ml-5">
          <button
            className="bg-blue-500 text-white rounded-md py-1 px-4"
            onClick={displayConsole}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ReadFormData;
