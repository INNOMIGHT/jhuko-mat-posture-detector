const express = require('express');
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

app.post('/image_upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    console.log('Image uploaded successfully');
    const kerasResponse = callKeras();
    return res.status(200).json({
        message: "uploaded successfully",
        data: makeResponse(kerasResponse)
    });
});

function makeResponse(responseString) {

}


function callKeras() {

}

app.listen(4000, () => {
    console.log('listening on port 4000');
});