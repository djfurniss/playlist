const knex = require("./db/connection")

function list () {
    return knex("songs").select("*")
}

module.exports = {
    list
}