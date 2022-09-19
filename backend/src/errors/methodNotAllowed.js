function methodNotAllowed (req, res, next) {
    res.status(405).json({error: `${req.method} not allowed on this route!`})
};

module.exports = methodNotAllowed;