const express = require('express');
const router = express.Router();
const {
  createCart,
  getAllCarts,
  getCart,
  updateCart,
  deleteCart,
} = require('../controllers/cart');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../utils/verifyToken');

//	create cart
router.post('/', verifyToken, createCart);

//	get all cart
router.get('/', verifyTokenAndAdmin, getAllCarts);

//	get user cart
router.get('/find/:userId', verifyTokenAndAuthorization, getCart);

//	update cart
router.put('/:id', verifyTokenAndAuthorization, updateCart);

//	delete cart
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);

module.exports = router;
