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
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} = require('../utils/verifyToken');

//	get all users
router.get('/', verifyToken, getAllUsers);

//	find specific user
router.get('/find/:id', verifyTokenAndAdmin, getUser);

//	update user
router.put('/:id', verifyTokenAndAuthorization, updateUser);

//	delete user
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

//	get user stat
router.get('/stats', verifyTokenAndAdmin, getUserStat);

//	testing
router.get('/checktoken', verifyToken, (req, res) => {
  res.json(req.user);
});

router.get('/checkadmin/:id', verifyTokenAndAdmin, (req, res) => {
  res.json(req.user);
});

router.get('/checkuser/:id', verifyTokenAndAuthorization, (req, res) => {
  res.send(req.user);
});

module.exports = router;
