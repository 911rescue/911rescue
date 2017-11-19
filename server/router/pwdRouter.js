const express = require('express');
const pwdRouter = express.Router();

const pwdController = require('./controller/pwdController');

pwdRouter.get('/', pwdController.checkPassword);
pwdRouter.put('/', pwdController.encryptPassword);

module.exports = pwdRouter;
