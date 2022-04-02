const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

module.exports = router;