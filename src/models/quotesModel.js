const connection = require('./connection');

const getAll = async () => {
    const [quotes] = await connection.execute('SELECT * FROM quotes');
    return quotes;
};

const createQuote = async (value) => {
    const { book, author, page, quote } = value;

    const query = 'INSERT INTO quotes(book, author, page, quote) VALUES (?, ?, ?, ?)';
    const [createQuote] = await connection.execute(query, [book, author, page, quote]);

    return {insertId: createQuote.insertId};
};

module.exports = {
    getAll,
    createQuote
};