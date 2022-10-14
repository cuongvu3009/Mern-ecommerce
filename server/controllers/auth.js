const register = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
