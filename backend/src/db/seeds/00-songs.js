/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const songs = require("../fixtures/songs")

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert(songs);
};
