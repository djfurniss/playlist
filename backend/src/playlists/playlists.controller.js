const service = require("./playlists.service");

// --- validation middleware ---
const playlistExists = async (req, res, next) => {
    const { playlist_id } = req.params
    const exists = await service.playlistExists(playlist_id)
    if (exists){
        res.locals.playlist = exists
        return next();
    }
    next({status: 400, message: "No playlist exists under this id"})
};

// --- router level middleware ---
async function list(req, res, next){
    const { user_id } = req.params
    // console.log(user_id)
    const data = await service.list(user_id)
    res.json({ data });
};

async function loadPlaylist (req, res, next){
    const { playlist_id } = req.params
    const data = await service.loadPlaylist(playlist_id)
    res.json({ data })
};

async function createPlaylist(req, res, next) {
    const { playlist_name, user_id } = req.body.data
    // console.log(playlist_name, user_id)
    const data = await service.createPlaylist(playlist_name, user_id)
    console.log(data)
    // console.log(`playlist created. name: ${playlist_name}}`)
    // res.status(203).json(data)
    res.json("WAOW!")
};

module.exports = {
    list,
    loadPlaylist: [playlistExists, loadPlaylist],
    createPlaylist
};