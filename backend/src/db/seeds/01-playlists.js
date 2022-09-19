/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('playlists').del()
  await knex('playlists').insert([
    {playlist_id: "abc", playlist_name: "out with friends"},
    {playlist_id: "test", playlist_name: "Mark & Jessie"},
    {playlist_id: "admin", playlist_name: "Study Time"},
  ]);
};
