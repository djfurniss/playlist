/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('playlists_songs').del()
  await knex('playlists_songs').insert([
    {playlist_id: 'abc', song_id: 2},
    {playlist_id: 'abc', song_id: 3},
    {playlist_id: 'test', song_id: 1},
    {playlist_id: 'test', song_id: 2},
    {playlist_id: 'test', song_id: 3},
    {playlist_id: 'admin', song_id: 1},
  ]);
};
