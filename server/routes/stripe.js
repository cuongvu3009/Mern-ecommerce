const router = require('express').Router();

const stripePay = require('../controllers/stripe');

router.post('/', stripePay);

module.exports = router;
