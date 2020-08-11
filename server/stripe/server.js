const cors = require('cors');
//idk what cors is tbh
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./frontend');

const corsOptions = {
  origin: (origin, callback) =>
    CORS_WHITELIST.indexOf(origin) !== -1
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS')),
};

const configureServer = (app) => {
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
};

module.exports = configureServer;
