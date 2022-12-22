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

function createPlaylist(playlist_name, user_id){
    return knex("playlists")
        .insert({playlist_name, owner: user_id})
        .returning("*")
        .then((created)=> created[0])
        .then((playlist)=>{
            const { playlist_id } = playlist
            return knex("users_playlists")
            .insert({playlist_id, user_id})
            // ,join("playlists", "playlists.playlist_id", "users_playlists.playlist_id")
            .returning("*")
        })
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