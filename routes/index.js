const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.rachelRoute);
routes.get('/mary', lesson1controller.maryRoute);

module.exports = routes;