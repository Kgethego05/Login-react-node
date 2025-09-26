const express = require('express');
const router = express.Router();
const {UserLogin} = require('../Controllers/UserControllers')

router.post('/login', UserLogin);
module.exports= router;