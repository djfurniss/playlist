const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router");
const morgan = require("morgan");
const pageNotFound = require("./errors/pageNotFound")
const errorHandle = require("./errors/errorHandle")

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

app.use("/", router)

app.use(errorHandle)
app.use(pageNotFound)

module.exports = app;