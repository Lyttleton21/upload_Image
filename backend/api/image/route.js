const $ImageController= require('./controller');

const upload = require('../../middleware/uploads')

exports.imageRoutes = (app) => {
    app.post('/api/image', upload.single('image'), $ImageController.ImageController.saveImage);
    app.get('/api/images', $ImageController.ImageController.getImages);
}