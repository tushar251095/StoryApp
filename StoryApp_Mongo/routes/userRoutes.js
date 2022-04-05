const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

//GET /users: send to login page
router.get('/login', controller.pushToLogin);

//GET /users/login: check user authentication using email
router.post('/login', controller.loginAuthentication);

//GET /users/signup: send to signup page
router.get('/new', controller.pushToSignup);

//GET /users/signup: add data to database
router.post('/new', controller.saveUser);

//GET /users/signup: add data to database
router.get('/profile', controller.getProfile);

//GET /users/signup: send to signup page
router.get('/logout', controller.logout);


module.exports = router;