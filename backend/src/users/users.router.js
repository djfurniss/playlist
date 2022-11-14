const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/login")
    .get(controller.logIn)

module.exports = router;