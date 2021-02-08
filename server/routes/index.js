const express = require('express');
const router = express.Router();

const user = require('./user');
const { authMiddlewere } = require('./user/middleweres');

router.use('/user',user);

router.use(authMiddlewere);


module.exports = router