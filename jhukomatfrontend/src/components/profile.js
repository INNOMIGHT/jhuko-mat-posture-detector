import React, { useState, useRef } from 'react'
import axios from 'axios';
import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}




async function savePicture(pictureSrc) {
  const formData = new FormData();
  formData.append('image', pictureSrc);
  try {
    const res = await axios.post('http://localhost:4000/image_upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

const Profile = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = useRef(null)
  const capture = async () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);

    const blob = await fetch(pictureSrc).then(res => res.blob());
    savePicture(blob);
  }

  const [selectedFile, setSelectedFile] = useState(null);
  function handleFileInputChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
  }
  function handleUploadButtonClick() {
    setPicture(selectedFile);
    savePicture(selectedFile);
  }

  return (
    <div className='col-12 col-lg-5 align-item-center'>

      <div className="row justify-content-center">
        {picture === '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} className="col-lg-9" />
        )}
      </div> <br />
      <div className='row justify-content-center text-center'>
        {picture !== '' ? (
          <button
            onClick={(e) => {
              window.location.reload()
            }}
            className="col btn btn-primary col-sm-3"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={capture}
            className="btn btn-danger col-sm-3"
          >
            Capture
          </button>
        )}

        <div className='col-sm-3'>
          <input type="file" accept="image/jpeg" onChange={handleFileInputChange} />
          <button onClick={handleUploadButtonClick} className='btn btn-primary'>Upload</button>
        </div>
      </div>
    </div>
  )
}
export default Profile