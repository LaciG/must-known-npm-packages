var Models = require('../models/index');
let sequelize = require('sequelize');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let multer = require('multer');


exports.index = (req, res) => {
    res.render('index', {layout: 'layouts/layout.hbs'});
}

exports.showLogin = (req, res) => {
    res.render('login', {layout: 'layouts/layout.hbs'});
}

exports.showRegister = (req, res) => {
    res.render('register', {layout: 'layouts/layout.hbs'});
}