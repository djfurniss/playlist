const knex = require("../db/connection");

function list(user_id){
    return knex("users_playlists")
        .select("*")
        .where({ user_id })
        .join("playlists", "users_playlists.playlist_id", "=", "playlists.playlist_id")
        .returning("*")
};

function loadPlaylist (playlist_id) {
    return knex("playlists")
        .select("*")
        .where({playlist_id})
        .first()
};

function createPlaylist(playlist){
    return knex("playlists")
        .insert(playlist)
};

function playlistExists(playlist_id){
    console.log(playlist_id)
    return knex("playlists")
        .select("*")
        .where({playlist_id})
        .first()
};

module.exports = {
    list,
    loadPlaylist,
    createPlaylist,
    playlistExists
};