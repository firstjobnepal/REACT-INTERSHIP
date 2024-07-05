// import React, { useRef, useState } from 'react'

// const DisplayImg = () => {
//     const [selectedImage, setSelectedImage] = useState();
//     const fileField = useRef()

//     const chooseImg = (e) => {
//         const file = e.target.files[0]
//         setSelectedImage(URL.createObjectURL(file))
//     }
//     const handleRemoveImage = (e) => {
//         setSelectedImage(null)

//         // e.target.closest('div').querySelector('input').value = null 

//         fileField.current.value = null;
//     }
//     return (
//         <form>
//             <div>
//                 <input type="file" onChange={(e) => chooseImg(e)} ref={fileField} />
//                 <img src={selectedImage} style={{ height: "300px" }} />

//                 {selectedImage &&
//                     <button type='button'
//                         className='bg-red-500 ml-20 mt-8 py-1 px-4 rounded-md text-white font-semibold'
//                         onClick={(e) => handleRemoveImage(e)}
//                     >Remove Image</button>}
//             </div>

//         </form>


//     )
// }

// export default DisplayImg;



import React, { useState, useRef } from 'react'

const DisplayImg = () => {
    const [copyUrl, setCopyUrl] = useState();
    let fileField = useRef();

    const chooseImg = (e) => {
        const file = e.target.files[0];
        setCopyUrl(URL.createObjectURL(file))
    }
    const deleteImg = () => {
        setCopyUrl(null)
        fileField.current.value = "";

    }
    // console.log(fileField);
    return (
        <div>
            <input type="file" onChange={(e) => chooseImg(e)} ref={fileField} />
            <img src={copyUrl} style={{ height: "300px " }} alt="" />

            {
                copyUrl &&
                <button onClick={deleteImg} >
                    delete
                </button>
            }
        </div>
    )
}

export default DisplayImg