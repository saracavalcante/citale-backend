const quotesModel = require('../models/quotesModel');

const getAll = async (req, res) => {
    const quotes = await quotesModel.getAll();

    return res.status(200).json(quotes);
};

module.exports = {
    getAll
};