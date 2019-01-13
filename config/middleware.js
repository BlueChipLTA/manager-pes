var bodyParser = require('body-parser');
// var compression = require('compression');
// var helmet = require('helmet');
var passport = require('passport');
require('../services/passport')
var auth = require('../router/auth')

module.exports = (app) => {
    // app.use(compression());
    // app.use(helmet());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(passport.initialize());
  app.use('/auth', auth);
}