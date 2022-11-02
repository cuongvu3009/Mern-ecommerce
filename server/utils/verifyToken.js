const jwt = require('jsonwebtoken');
const createError = require('./createError');

const verifyToken = async (req, res, next) => {
  const token = await req.cookies.accessToken;
  console.log(token);
  if (!token) {
    return res.status(401).json('You are not authenticated!');
  }

  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) res.status(403).json('Token is not valid!');
    req.user = user;
    next();
  });
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
