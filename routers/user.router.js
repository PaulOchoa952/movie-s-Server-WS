const express =require('express');
const router = express.Router();
const userController = require('../controllers/users.controllers');
const authMiddleWare=require('../utils/auth.middleware');

router.post('/',authMiddleWare.authenticateToken,userController.registerUser);

router.get('/',userController.getUser);

router.post('/login',userController.loginUser);

module.exports = router;