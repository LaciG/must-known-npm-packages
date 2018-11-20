const jwt = require('jsonwebtoken');
var Models = require('../models/index');
const Joi = require('joi');
const multer = require('multer')();
const cookieParser = require('cookie-parser');

var session = require('express-session');
var flash = require('req-flash');

var appData = {};

/* exports.register = function(req,res) {
    appData['name'] = req.body.name;
    appData['email'] = req.body.email;
    appData['password'] = req.body.password;

    res.status(201).json(appData);
}; */

const registerSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().strip()
});

const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().strip()
});

exports.register = (multer.array(), (req, res) => {
    console.log(req.body);
    const { error, value } = Joi.validate(req.body, registerSchema);
    if (error) {
        req.flash('error', 'This is a flash message using the express-flash module.');
        res.render('/');
    }
    console.log(req.body);
    res.redirect('/loggedin');
})

exports.login = (req, res) => {
    Models.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if(user !== null){
                res.send('Logged In!!!<br> But not checking the password!!!<bR>Authenticate HERE!!!');
            }
        })
};