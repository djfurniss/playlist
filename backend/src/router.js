const router = require("express").Router();
const controller = require("./controller");
const methodNotAllowed = require("./errors/methodNotAllowed")

router  
    .route("/playlists/:playlistId")
    .get(controller.loadPlaylist)
    .all(methodNotAllowed)

router
    .route("/playlists/songs/:playlistId")
    .get(controller.listSongs)
    .put(controller.likeSong)
    .post(controller.addSong)
    .all(methodNotAllowed)

router
    .route("/new-playlist/:playlistId")
    .post(controller.createPlaylist)
    .all(methodNotAllowed)

module.exports = router