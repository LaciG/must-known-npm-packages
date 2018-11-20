var Models = require('../models/index');
let sequelize = require('sequelize');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let multer = require('multer');


exports.showHome = (req, res) => {
    res.render('index', {layout: 'layout.hbs', title: 'Homs site'});
}