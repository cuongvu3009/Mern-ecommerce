const Cart = require('../models/Cart');

const createCart = async (req, res, next) => {
  const newCart = new Cart({ userId: req.user.id, ...req.body });
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    next(error);
  }
};

const getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};

//	get user cart
const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};
const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been deleted!');
  } catch (error) {
    next(error);
  }
};

module.exports = { createCart, getAllCarts, getCart, updateCart, deleteCart };
