const User = require('../models/User');
const createError = require('../utils/createError');

const getUser = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
const getUserStat = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

module.exports = { getUser, getAllUsers, updateUser, deleteUser, getUserStat };
