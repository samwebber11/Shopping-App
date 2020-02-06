const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin/adminController')
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/add-product',adminController.getAddProducts);

router.post('/add-product',adminController.postAddProducts);

router.get('/edit-product',adminController.getEditProducts);

router.get('/delete-product',adminController.getDeleteProducts);

router.get('/admin-products',adminController.getListAdminProducts);

module.exports = router;