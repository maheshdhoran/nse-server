const express = require('express');
const statusRoute = require('./status/status.route');
const router = express.Router();

router.use('/status', statusRoute);

module.exports = router;