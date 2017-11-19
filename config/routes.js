let router = require('express').Router();
let userController = require('./controller/userController');

router.get('/login/:user', userController.login);

router.post('/register', userController.signUp);



module.exports = router;
