/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

require("dotenv").config()

exports.up = function(knex) {
  return knex.schema.createTable("songs", (table) => {
    table.increments("song_id").primary()
    table.string("name")
    table.string("artist")
    table.string("year")
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("songs")
};
