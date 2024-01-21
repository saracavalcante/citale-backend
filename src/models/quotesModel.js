const connection = require('./connection');

const getAll = async () => {
    const [quotes] = await connection.execute('SELECT * FROM quotes');
    return quotes;
};

module.exports = {
    getAll
};