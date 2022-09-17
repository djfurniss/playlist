const knex = require("./db/connection");

function list () {
    return knex("songs")
        .select("*")
};

function create (newSong) {
    return knex("songs")
        .insert(newSong)
        .returning("*")
        .then(newRecord => newRecord[0])
};

module.exports = {
    list,
    create
};