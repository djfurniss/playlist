const router = require("express").Router();
const controller = require("./playlists.controller");
const methodNotAllowed = require("../errors/methodNotAllowed")

router  
    .route("/:playlist_id")
    .get(controller.loadPlaylist)
    .all(methodNotAllowed)

router
    .route("/songs/:playlistId")
    .get(controller.listSongs)
    .put(controller.likeSong)
    .post(controller.addSong)
    .all(methodNotAllowed)

router
    .route("/new")
    .post(controller.createPlaylist)
    .all(methodNotAllowed)

module.exports = router