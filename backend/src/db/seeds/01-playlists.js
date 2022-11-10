/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const playlists = require("../fixtures/playlists");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE playlists RESTART IDENTITY CASCADE")
  await knex('playlists').insert(playlists);
};
