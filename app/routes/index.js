const express = require('express');
require('express-group-routes');

const productController = require('../controllers/product.controller');

const router = express.Router();

router.group('/v1', (router) => {
    // Products
    router.group('/products', (router) => {
        router.post('/', productController.post);
        router.get('/', productController.get);
        router.get('/:id', productController.show);
    });
});

module.exports = router;