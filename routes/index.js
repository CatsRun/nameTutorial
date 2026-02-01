const express = require('express');
const router = express.Router();

router.use('/', require('./swagger')); //added for swagger documentation route
router.use('/contacts', require('./contacts'))

module.exports = router;