/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // many to many
    // song id is from the Spotify API
  return knex.schema.createTable("playlists_songs", (table) => {
    table.integer("playlist_id")
    table.integer("song_id")
    table.foreign("playlist_id")
        .references("playlist_id")
        .inTable("playlists")
    table.unique(["playlist_id", "song_id"])
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("playlists_songs")
  
};
