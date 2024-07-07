import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DisplayImg = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedImage, setSelectedImage] = useState();
  const fileField = useRef();

  const chooseImg = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  const handleRemoveImage = (e) => {
    setSelectedImage(null);

    // e.target.closest('div').querySelector('input').value = null

    fileField.current.value = null;
  };
  return (
    <form className={`bg-${theme} h-screen`}>
      <div>
        <input type="file" onChange={(e) => chooseImg(e)} ref={fileField} />
        <img src={selectedImage} alt="" style={{ height: "300px" }} />

        {selectedImage && (
          <button
            type="button"
            className="bg-red-500 ml-20 mt-8 py-1 px-4 rounded-md text-white font-semibold"
            onClick={(e) => handleRemoveImage(e)}
          >
            Remove Image
          </button>
        )}
      </div>
    </form>
  );
};

export default DisplayImg;
