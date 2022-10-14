const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  getMonthlyIncome,
} = require('../controllers/order');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../utils/verifyToken');

//	create order
router.post('/', verifyToken, createOrder);

//	get all orders
router.get('/', verifyTokenAndAdmin, getAllOrders);

//	get user order
router.get('/find/:userId', verifyTokenAndAuthorization, getOrder);

//	update order
router.put('/:id', verifyTokenAndAdmin, updateOrder);

//	delete order
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);

//	get monthly income
router.get('/income', verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;
