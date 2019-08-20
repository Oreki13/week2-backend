const express = require('express');
const store = require('../Routes/store');

const router = express.Router();

router.use('/store', store);

module.exports = router;