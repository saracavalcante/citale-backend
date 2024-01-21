const express = require('express');
const quotesController = require('./controllers/quotesController');
const quoteMiddleware = require('./middlewares/quotesMiddlewares');

const router = express.Router();

router.get('/quotes', quotesController.getAll);
router.post('/quotes', quoteMiddleware.validateBody, quotesController.createQuote);
router.delete('/quotes/:id', quotesController.deleteQuote);
router.put('/quotes/:id', quotesController.updateQuote);

module.exports = router;