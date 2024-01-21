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

const deleteQuote = async (id) => {
    const deleteQuote = await connection.execute('DELETE FROM quotes WHERE id = ?', [id]);
    return deleteQuote;
};

const updateQuote = async (id, value) => {
    const { book, author, page, quote } = value;

    const query = 'UPDATE quotes SET book = ?, author = ?, page = ?, quote = ? WHERE id = ?'
    const updateQuote = await connection.execute(query, [book, author, page, quote, id]);
    return updateQuote;
};

module.exports = {
    getAll,
    createQuote,
    deleteQuote,
    updateQuote
};