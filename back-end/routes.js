const express = require('express');
const CandidateController = require('./candidates/Candidate');
const routes = new express.Router();

routes.post('/register', CandidateController.register);
routes.get('/', (req, res) => {
    res.send('Deu certo');
});
module.exports = routes;