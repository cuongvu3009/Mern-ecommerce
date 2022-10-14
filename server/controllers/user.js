const User = require('../models/User');
const createError = require('../utils/createError');
const bcrypt = require('bcryptjs');

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    //	filter password
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  try {
    //	check if user exist
    if (!user) return next(createError(404, 'No user with this id'));

    //	check authorization, for sure
    if (req.user.id !== req.params.id)
      return next(createError(404, 'You cannot update someone else password'));

    //	update password
    if (req.body.password) {
      if (req.body.password === user.password) {
        return next(
          createError(401, 'New password cannot the same as the old password')
        );
      } else {
        //	hash new password
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
        //	tracking password update
        const today = new Date();
        const date =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate();
        const time =
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds() +
          '.' +
          today.getMilliseconds() +
          'Z';

        req.body.updated_password = date + 'T' + time;
      }
    }

    //	update others but password
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json('User has been deleted!');
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
