function pageNotFound(err, req, res, next){
    res.status(404).json({error: "Page not found."})
};

module.exports = pageNotFound;