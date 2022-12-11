// const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:5001"
// const BASE_API_URL = "http://localhost:5001"
const BASE_API_URL = "https://every-rings-cough-99-131-23-93.loca.lt"
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Bypass-Tunnel-Reminder", "true");

export async function test() {
    const url = `${BASE_API_URL}/test`
    return fetch(url, headers)
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw res.error
            }else{
                console.log(res)
                return res
            }
        })
        .catch(err => {
            throw err
        })
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