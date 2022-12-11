const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// mounted to "/users"
router
    .route("/login")
    .put(controller.logIn)

router
    .route("/:user_id/playlists")
    .get(controller.getPlaylists)

router
    .route("/register")
    .post(controller.register)

module.exports = router;