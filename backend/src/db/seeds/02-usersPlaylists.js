/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const usersPlaylists = require("../fixtures/usersPlaylists");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_playlists').del()
  await knex('users_playlists').insert(usersPlaylists);
};
