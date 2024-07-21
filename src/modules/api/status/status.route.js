const express = require('express');
const { status } = require('./status.controller');
const statusRoute = express.Router();

statusRoute.route('/').get(status);

module.exports = statusRoute;

