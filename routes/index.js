const express = require('express');
const router = express.Router();

// router.use('/'); //root route -- how do I make this work? 
router.use('/', require('./swagger')); //added for swagger documentation route
router.use('/contacts', require('./contacts'))

module.exports = router;