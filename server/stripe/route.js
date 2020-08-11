const paymentFile = require('./payment');
const routes = (app) => {
  paymentFile(app);
};

module.exports = routes;
