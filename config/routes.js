let router = require('express').Router();
let usersController = require('../server/controller/userController');

router.get('/login', usersController.login);

router.post('/register', usersController.signUp);



module.exports = router;
