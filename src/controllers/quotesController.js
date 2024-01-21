const quotesModel = require('../models/quotesModel');

const getAll = async (_, res) => {
    const quotes = await quotesModel.getAll();

    return res.status(200).json(quotes);
};

const createQuote = async (req, res) => {
    const createQuote = await quotesModel.createQuote(req.body);
    return res.status(201).json(createQuote);
};

const deleteQuote = async (req, res) => {
    const { id } = req.params;

    await quotesModel.deleteQuote(id);
    return res.status(204).json();
};

const updateQuote = async (req, res) => {
    const { id } = req.params;

    await quotesModel.updateQuote(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createQuote,
    deleteQuote,
    updateQuote
};