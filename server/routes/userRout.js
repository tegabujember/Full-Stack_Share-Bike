const express = require('express');
const userController = require('../controller/userController');
const authControlle = require('../controller/authController');

const router = express.Router();

router.post('/register', authControlle.signup);
router.post('/login', authControlle.login);
router.get('/logout', authControlle.logout);

router.patch('updateMe', userController.updateMe)
router.get('/users', authControlle.protect ,userController.getAllUsers)
router.get('/users/id', userController.getOneUser)

module.exports = router;
