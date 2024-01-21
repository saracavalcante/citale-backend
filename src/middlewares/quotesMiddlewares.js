const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.book == undefined) {
        return res.status(400).json({ message: 'The field "book" is required' });
    }

    next();
};

module.exports = {
    validateBody
};