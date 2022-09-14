// Middleware pour factoriser nos try catch

module.exports = (controller) => (req, res, next) => {
    try {
        controller(req, res, next);
    } catch (err) {
        next(err);
    }
};
