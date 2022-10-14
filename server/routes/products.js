const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllUProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product');
const { verifyTokenAndAdmin } = require('../utils/verifyToken');

//	create product
router.post('/', verifyTokenAndAdmin, createProduct);

//	get all product
router.get('/', getAllUProduct);

//	find specificproduct
router.get('/find/:id', getProduct);

//	update product
router.put('/:id', verifyTokenAndAdmin, updateProduct);

//	deleteproduct
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

module.exports = router;
