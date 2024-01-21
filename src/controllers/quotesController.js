const quotesModel = require('../models/quotesModel');

const getAll = async (_, res) => {
    const quotes = await quotesModel.getAll();

    return res.status(200).json(quotes);
};

const createQuote = async (req, res) => {
    const createQuote = await quotesModel.createQuote(req.body);
    return res.status(201).json(createQuote);
};

module.exports = {
    getAll,
    createQuote
};