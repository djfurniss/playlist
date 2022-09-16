const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())

const songs = require("./data/songs")
app.use((req, res, next) => {
    res.json({data: songs})
})





module.exports = app;