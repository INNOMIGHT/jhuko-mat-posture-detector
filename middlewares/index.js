const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, "sitting_posture.jpeg");
    },
});

const upload = multer({ storage: fileStorageEngine });

app.post('/image_upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    console.log('Image uploaded successfully');
    return res.status(200).json({
        message: "uploaded successfully",
    });
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});