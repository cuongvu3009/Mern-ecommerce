const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const createError = require('../utils/createError');

const register = async (req, res, next) => {
  try {
    //	check if email exist
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return next(
        createError(401, 'This email has been used, please try another one!')
      );

    //	hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //	create new user
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();

    res.status(200).json('User has been created!');
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    //	check if email exist
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return next(
        createError(404, `Cannot find this email, please try again!`)
      );

    //	check if password correct
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(403, 'Invalid credential!'));

    //	provide token
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC
    );

    //	filter password
    const { password, ...other } = user._doc;
    res
      .cookie('accessToken', accessToken, { httpOnly: true })
      .status(200)
      .json({ ...other, accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
