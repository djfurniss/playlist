/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users_playlists", (table) => {
    table.integer("playlist_id")
    table.integer("user_id")
    table.foreign("playlist_id")
        .references("playlist_id")
        .inTable("playlists")
    table.foreign("user_id")
        .references("user_id")
        .inTable("users")
    table.primary(["playlist_id", "user_id"])
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users_playlists")
};
