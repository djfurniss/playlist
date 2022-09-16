const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.json({message: "hello there"})
})





module.exports = app;