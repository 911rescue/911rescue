let router = require('express').Router();
let userController = require('./controller/userController');
let emergenciesController = require('./controller/emergenciesController');

router.get('/login/:user', userController.login);

router.post('/register', userController.signUp);

router.get('/emergency/:phoneNumber', emergenciesController.sendTexts);

module.exports = router;
