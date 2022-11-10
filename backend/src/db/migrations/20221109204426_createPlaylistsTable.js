/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("playlists", (table) => {
    table.increments("playlist_id")
    table.string("playlist_name")
    table.integer("owner")
    table.foreign("owner")
        .references("user_id")
        .inTable("users")
    table.unique(["playlist_id", "owner"])    
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("playlists")
};
