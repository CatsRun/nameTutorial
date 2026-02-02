const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// get all contacts
router.get('/', contactsController.getAll);

// get single contact by id
router.get('/:id', contactsController.getSingle);

// create new contact (post can be used for create or update depending on the function)
router.post('/', contactsController.createContact);

// update contact by id, replaces old data
router.put('/:id', contactsController.updateContact);   

// delete contact by id
router.delete('/:id', contactsController.deleteContact);  

module.exports = router;