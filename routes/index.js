const routes = require('express').Router();
const contactController = require('../controllers/contacts');

routes.get('/', contactController.rachelRoute);
routes.get('/mary', contactController.maryRoute);

module.exports = routes;

