var express = require('express');
var router = express.Router();

var siteController = require('../controllers/siteController');
var userController = require('../controllers/userController');

router.get('/', siteController.index);
router.get('/login', siteController.showLogin);
router.get('/register', siteController.showRegister);

router.post("/users/register", userController.register);

module.exports = router;
