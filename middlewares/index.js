const express = require('express');
const axios = require("axios");
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../backend/sample_images/');
    },
    filename: (req, file, cb) => {
        cb(null, "sitting_posture.jpeg");
    },
});

const upload = multer({ storage: fileStorageEngine });

app.post('/image_upload', upload.single('image'), async (req, res) => {
    console.log('Image uploaded successfully\n');
    const kerasResponse = await callKeras();
    console.log(kerasResponse);
    return res.status(200).json({
        message: "uploaded successfully",
        data: makeResponse(kerasResponse)
    });

});

function makeResponse(responseString) {
    return responseString;
}

async function callKeras() {
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1');
        return res.data;
    } catch (err) {
        return err;
    }

}

app.listen(4000, () => {
    console.log('listening on port 4000');
});