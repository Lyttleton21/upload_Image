const Sequelize = require('sequelize');
const sequelize = require('../../config/connection');
const image = require('../models/image');
const Image = require('../models/image')(sequelize, Sequelize);
const fs = require("fs");

Image.sync();

exports.ImageController = {

    saveImage: async (req, res ) => {
        try {
            const {originalname, mimetype } = req.file;
            const data = {
                filename:originalname,
                filetype:mimetype,
                data: fs.readFileSync(
                         "./resources/static/assets/uploads/" + req.file.filename
                    )
            }
            //console.log(data); 
            const image = await Image.create(
                data
                // filename: req.file.mimetype,
                // filetype: req.file.originalname,
                // data: fs.readFileSync(
                //      "./resources/static/assets/uploads/" + req.file.filename
                // )
            )
            if(image instanceof Image) {
                // console.log("IMAGE:::",image);
                // fs.writeFileSync("./resources/static/assets/tmp/" + image.filename,
                //     image.data
                // );
                res.send(`${image.filename} has been uploaded.`);
            }
            // .then((image) => {
            //     console.log(image);
            //     fs.writeFileSync(
            //         "./resources/static/assets/tmp/" + image.id,
            //         image.data
            //     );
                
            //     return res.send(`File has been uploaded.`);
            // });
        } catch (error) {
            console.log(error.message);
            return res.send(`Error when trying upload images: ${error.message}`)
        }
    },

    getImages: async(req, res) => {
        try {
            await Image.findAll()
            .then((images) => {
                images.map((image) => {
                    const projectImage = image.data.toString('base64')
                    image['data'] = projectImage
                });
                return images
            }).then(images => {
                return res.status(200).json(images)
            })
        } catch (error) {
            console.log(error.message);
            res.send(error.message);
        }
    }

}