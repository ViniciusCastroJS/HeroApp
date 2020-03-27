const express = require('express');

const ongcontroller = require('./Controllers/ongcontroller');
const incidentcontroller = require('./Controllers/incidentcontroller');
const profilecontroller = require('./Controllers/profilecontroller');
const sessioncontroller = require('./Controllers/Sessioncontroller');
const routes = express.Router();


routes.post('/sessions', sessioncontroller.create)

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);


routes.get('/profile', profilecontroller.index);


routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);

module.exports = routes;