const express = require('express');
const router = express.router;
const { getUser, createUser, login } = require('../controller/users');

router.get('/', getUser);
router.get('/', createUser);
router.get('login', login);

 module.exports = router;
