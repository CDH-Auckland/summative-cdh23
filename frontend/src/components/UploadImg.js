import React, { useState, useEffect } from 'react';


import ControlPointIcon from '@mui/icons-material/ControlPoint';

function UploadImg(props) {
    const validFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const [error, setError] = useState('');
    const [image, setImage] = useState(null);
    const [imgFile, setImgFile] = useState();

    const uploadHandler = ({ target: { files } }) => {
        console.log(files[0]);
        if (!validFileTypes.find(type => type === files[0].type)) {
            setError("File must be in JPG/PNG format");
            return;
        }
        if (files) {
            setImage(URL.createObjectURL(files[0]));
            setImgFile(files[0]);
            props.imgFile(files[0], props.id);
        }
    }

    // onClick={() => document.querySelector(".imgInputA").click()}
    return (
        <div className='uploadimg' >
            <input type='file' id={props.id} accept='image/*' className='uploadimg__input'
                onChange={uploadHandler} />
            <label htmlFor={props.id}>
                {image ? "" : <ControlPointIcon fontSize='large' />}
                {image ? <img src={image} /> : <h5>Add images</h5>}
            </label>
            {error && <h4> {error}</h4>}
        </div>
    )
}

export default UploadImg