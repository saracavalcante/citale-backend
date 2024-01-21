const express = require('express');
const quotesController = require('./controllers/quotesController');

const router = express.Router();

router.get('/quotes', quotesController.getAll);

module.exports = router;