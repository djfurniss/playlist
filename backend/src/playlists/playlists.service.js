const knex = require("../db/connection");

function listSongs (playlist_id) {
    return knex("songs as s")
        .join("playlists_songs as ps", "ps.song_id", "s.song_id")
        .join("playlists as p", "ps.playlist_id", "p.playlist_id")
        .select("*")
        .where({"p.playlist_id": playlist_id})
};

function loadPlaylist (playlist_id) {
    return knex("playlists")
        .select("*")
        .where({playlist_id})
        .first()
}

function addSong (newSong) {
    return knex("songs")
        .insert(newSong)
        .returning("*")
        .then(newRecord => newRecord[0])
};

function likeSong(song_id){
    return knex("playlists_songs")
        .update({ liked: !liked })
        .where({ song_id })
        .returning("*")
}

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
}

module.exports = {
    listSongs,
    addSong,
    likeSong,
    loadPlaylist,
    createPlaylist,
    playlistExists
};