import React, { useState } from 'react'
import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Profile = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    //use this pictureSrc to save in folder
    setPicture(pictureSrc)
  })
  return (
    <div className='col-12 col-lg-5 align-item-center'>

      <div class="row justify-content-center">
        {picture == '' ? (
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
      <div className='row justify-content-center'>
        {picture != '' ? (
          <button
            onClick={(e) => {
              window.location.reload()
            }}
            className="btn btn-primary col-sm-3"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-danger col-sm-3"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
export default Profile