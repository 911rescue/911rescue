let router = require('express').Router();
let userController = require('./controller/userController');

router.get('/login', userController.login);

router.post('/register', userController.signUp);



module.exports = router;
