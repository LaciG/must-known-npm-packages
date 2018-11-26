const jwt = require('jsonwebtoken');
var Models = require('../models/index');
const cookieParser = require('cookie-parser');

var session = require('express-session');
var flash = require('req-flash');

let insertUser = (insertUserObject) => {
    return Models.user.create({
        name: insertUserObject.name,
        username: insertUserObject.username,
        email: insertUserObject.email,
        password:insertUserObject.generateHash(password)
    })
}


exports.register = (req, res) => {
    let insertUserObject = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        password2: req.body.password2
    }

        //Validations
        req.checkBody('name', 'Name is required').notEmpty();
        req.checkBody('email', 'E-Mail is required').notEmpty();
        req.checkBody('email', 'E-Mail is not valid').isEmail();
        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

        var errors = req.validationErrors();
        if(errors){
            res.render('register', {
                layout: 'layouts/layout.hbs',
                errors:errors
            });
        } else {
            insertUser(insertUserObject)
            .then(result => {
                req.flash('success_msg', 'You are registered and can now login');
                res.redirect('/login');
            })
        }
}

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