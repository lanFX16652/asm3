import express from 'express'
import multer from 'multer'


const mediaRoute = (app) => {

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads');
        },
        filename: function (req, file, cb) {
            const [name, mimetype] = file.originalname.split('.')
            cb(null, name + '-' + Date.now() + '.' + mimetype);
        },
    });

    const upload = multer({ storage });

    app.post('/medias/upload', upload.single('images'), function (req, res) {
        const file = req.file
        console.log(file)
        return res.send(200)
    })
}

export default mediaRoute