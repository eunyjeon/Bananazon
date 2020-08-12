const router = require('express').Router();
const products = require('./products');
module.exports = router;

router.use('/users', require('./users'));
router.use('/products', products);
router.use('/orders', require('./orders'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
