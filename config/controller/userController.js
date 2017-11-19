const db = require('../../config/database');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const saltRounds = 10;
const User = require('../../models/index').User;


const login = (req, res) => {
  let buff = new Buffer(req.params.user, 'base64');  
  let text = JSON.parse(buff.toString('ascii'));
  console.log("REQ PARAMS ARE: ", text.params);
  User.findOne({where: {email: text.params.email }}).then((user) => {
    console.log("USER IS: ", user);
    if(user){
      bcrypt.compare(text.params.password, user.password, (err, data) => {
        console.log("DATA IS: ", data);
        if(data){
          console.log("User Logged In: ", user);
          res.status(200).send(user);
        } else {
          console.log('Invalid Login woooo Credentials');
          res.send({message: 'Invalid Login Credentials'});
        }
      });
    } else {
      console.log('Invalid Login Credentials');
      res.send({message: 'Invalid Login Credentials'});
    }
  });
}

const signUp = (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      User.findOne({where: {email: req.body.email }}).then((person) => {
        if(person){
          console.log('That email is taken. Please use another email address.');
          res.status(404).send(err);
        } else {
          console.log("OUR BODY OBJECT IS: ", req.body);
          User.create({
            name: req.body.name,
            password: hash,
            callbackContactNumber: req.body.callbackContactNumber,
            email: req.body.email,

          })
          .then((newUser) => {
            res.status(201).send(newUser);
          })
        }
      });
    });
  });
};

const listSecureProp = (req, res) => {
  User.findAll({ where: {email: req.params.email}}).then((data) => {
    console.log('data retrieved', data)
    if (data) {
      // list available props
    }
  })

};

module.exports = {
  signUp,
  login
}