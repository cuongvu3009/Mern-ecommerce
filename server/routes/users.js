const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUser,
  getUserStat,
  updateUser,
  deleteUser,
} = require('../controllers/user');
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require('../utils/verifyToken');

//	get all users
router.get('/', verifyTokenAndAdmin, getAllUsers);

//	find specific user
router.get('/find/:id', verifyTokenAndAdmin, getUser);

//	update user
router.put('/:id', verifyTokenAndAuthorization, updateUser);

//	delete user
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

//	get user stat
router.get('/stats', verifyTokenAndAdmin, getUserStat);

module.exports = router;
