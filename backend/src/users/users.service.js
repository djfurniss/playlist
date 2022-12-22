const knex = require("../db/connection");

function logIn(user_name, hash){
    return knex("users")
    .where({user_name, password: hash})
    // .join("users_playlists", "users.user_id", "users_playlists.user_id")
    // .join("playlists p", "up.playlist_id", "p.playlist_id")
    .returning("*")
    .then(user => user[0])
};

function register(user_name, email, password){
    return knex.raw(`INSERT INTO users (user_name, email, password) VALUES ('${user_name}', '${email}', '${password}')`)
};

function userExists(user_name){
    return knex("users")
    .where({user_name})
    .then(user => user[0])
};

module.exports = {
    logIn,
    register,
    userExists
};