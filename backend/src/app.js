const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const pageNotFound = require("./errors/pageNotFound")
const errorHandle = require("./errors/errorHandle")

const playlistsRouter = require("./playlists/playlists.router");
const usersRouter = require("./users/users.router")

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

app.use("/playlists", playlistsRouter)
// app.use("/users", usersRouter)

app.use(errorHandle)
app.use(pageNotFound)

module.exports = app;