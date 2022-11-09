function errorHandle(err, req, res, next){
    const { status, message } = err;
    res.status(status).json({error: message})
};

module.exports = errorHandle;