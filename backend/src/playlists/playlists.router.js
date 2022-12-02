const router = require("express").Router({mergeParams: true});
const controller = require("./playlists.controller");
const methodNotAllowed = require("../errors/methodNotAllowed")

router
    .route("/")
    .get(controller.list)

router  
    .route("/:playlist_id")
    .get(controller.loadPlaylist)
    .all(methodNotAllowed)

router
    .route("/new")
    .post(controller.createPlaylist)
    .all(methodNotAllowed)

module.exports = router;