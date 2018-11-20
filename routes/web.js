var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const siteController = require('../controllers/siteController');

router.get('/', siteController.showHome);

module.exports = router;