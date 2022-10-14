const jwt = require('jsonwebtoken');
const createError = require('./createError');

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (token) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return next(createError(401, 'Token is not valid!'));

      req.user = { name: user.name, id: user.id, isAdmin: user.isAdmin };
      next();
    });
  } else {
    return next(createError(401, 'You are not authenticated!'));
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(401, 'You are not allow to do this!'));
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(401, 'You are not allow to do this!'));
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
