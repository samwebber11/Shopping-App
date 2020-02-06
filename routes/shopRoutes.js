const express = require('express');
const path = require('path');

const shopController = require('../controllers/shop/shopController')
const rootDir = require('../utils/path');
const router = express.Router();

router.get('/',shopController.getAllProducts);

router.get('/products');

router.get('/cart',shopController.getCartProducts);

router.post('/cart',shopController.postCartProducts);

router.get('/details/:productId',shopController.getProductById);

router.get('/checkout',shopController.getCheckout);

router.get('/admin-products');

module.exports = router;
