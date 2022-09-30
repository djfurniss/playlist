const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:5001"


// async function playlistExists (playlistId) {
//     ///playlists/:playlistId
    
//     return res.json()
// };

export async function addPlaylist() {
    
};

export async function loadPlaylist(playlistId){
    const res = await (await fetch(`${BASE_API_URL}/playlists/${playlistId}`)).json()
    if (res.data){
        return res.data.playlist_name
    }
    else{ 
        // console.log(res.error)
        throw res.error
    }
};

export async function loadSongs(playlistId){
    const res = await fetch(`${BASE_API_URL}/playlists/songs/${playlistId}`)
    const { data } = await res.json()
    return data
};

export async function addSong() {

};

export async function deleteSong() {

};