const express = require('express');
const quotesController = require('./controllers/quotesController');
const quoteMiddleware = require('./middlewares/quotesMiddlewares');

const router = express.Router();

router.get('/quotes', quotesController.getAll);
router.post('/quotes', quoteMiddleware.validateBody, quotesController.createQuote);

module.exports = router;