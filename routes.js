const express = require('express');
const CandidateController = require('./candidates/Candidate');
const routes = new express.Router();
const path = require('path');

routes.post('/register', CandidateController.register);
routes.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'));
});
module.exports = routes;