const createError = require('../utils/createError');

//	secret key
const STRIPE_KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(STRIPE_KEY);

const stripePay = async (req, res, next) => {
  try {
    await stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd',
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          return next(createError(500, stripeErr));
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = stripePay;
