/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("playlists_songs", (table) => {
        table.string("playlist_id")
        table.foreign("playlist_id")
            .references("playlist_id")
            .inTable("playlists")
            .onDelete("cascade")
        table.integer("song_id")
        table.foreign("song_id")
            .references("song_id")
            .inTable("songs")
            .onDelete("cascade")
        table.timestamps(true,true)
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("playlists_songs")
};
