const { User } = require('../../models/');
const bcrypt = require('bcrypt');

const pwdController = {

  encryptPassword: (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) console.error('error encrypting password', err);
      User.update({
        password: hash
      }, { where: {
        email: req.body.email
      }})
    })
  },

  checkPassword: (req, res) => {
    bcrypt.compare(req.body.password, req.body.hash, (err, res) => {
      if (err) console.error('error comparing password', err);
      if (res) {
        console.log('password confirmed');
        return;
      } else {
        console.log('password incorrect');
        throw error;
      }
    })
  }

};

module.exports = pwdController;
