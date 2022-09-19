/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const songs = require("../fixtures/songs")

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE songs RESTART IDENTITY CASCADE")
  await knex('songs').insert(songs);
};
