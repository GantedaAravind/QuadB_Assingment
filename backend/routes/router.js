const express = require('express');
const addTicker = require('../controllers/postTricker');
const getAllTickers = require('../controllers/getTrickers');
const router = express.Router();

// Route to add a new ticker (POST request)
router.post('/tickers', addTicker);

// Route to get all tickers (GET request)
router.get('/tickers', getAllTickers);

// Export the router
module.exports = router;
