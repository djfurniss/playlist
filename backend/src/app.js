const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router");
const morgan = require("morgan");

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

app.use("/", router)

app.use((req, res, next) => {
    res.status(404).json({error: "Page not found."})
})

app.use((err, req, res, next) => {
    const { status, message } = err;
    res.status(status).json({error: message})
});

module.exports = app;