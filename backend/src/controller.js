const service = require("./service")

const playlistExists = async (req, res, next) => {
    const { playlistId } = req.params
    const exists = await service.playlistExists(playlistId)
    if (exists){
        res.locals.playlist = exists
        return next();
    }
    next({status: 400, message: "No playlist exists under this id"})
}

async function listSongs (req, res, next){
    const { playlistId } = req.params
    const data = await service.listSongs(playlistId)
    res.json({ data })
};

async function loadPlaylist (req, res, next){
    const { playlistId } = req.params
    const data = await service.loadPlaylist(playlistId)
    res.json({ data })
}

async function addSong(req, res, next){
    const data = await service.addSong(req.body.data)
    res.json({ data })
};


async function createPlaylist(req, res, next) {
    const {playlist_name, playlist_id} = req.body.data
    await service.createPlaylist(req.body.data)
    console.log(`playlist created. id: ${playlist_id}, name: ${playlist_name}}`)
    res.status(203).json({message: `playlist created. id: ${playlist_id}, name: ${playlist_name}`})
}

module.exports = {
    listSongs: [playlistExists, listSongs],
    addSong: [playlistExists, addSong],
    loadPlaylist,
    createPlaylist
}