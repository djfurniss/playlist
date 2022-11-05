/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('playlists_songs').del()
  await knex('playlists_songs').insert([
    {playlist_id: 'abc', song_id: 2, added_by: "Maddie"},
    {playlist_id: 'abc', song_id: 3, added_by: "Mike"},
    {playlist_id: 'test', song_id: 1, added_by: "Bob"},
    {playlist_id: 'test', song_id: 2},
    {playlist_id: 'test', song_id: 3},
    {playlist_id: 'admin', song_id: 1},
  ]);
};
