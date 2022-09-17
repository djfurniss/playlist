const service = require("./service")

async function list (req, res, next){
    const data = await service.list()
    res.json({ data })
};

async function create(req, res, next){
    await service.create(req.body.data)
    res.json({ data: req.body.data })
}

module.exports = {
    list,
    create
}