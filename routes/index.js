var bodyParser = require('body-parser');

var apiRouter = require('./api');
var webRouter = require('./web');

const users = require('../controllers/userController');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use('/api', apiRouter);
  app.use('/', webRouter);
}


