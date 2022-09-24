import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostSong from "../PostSong";
import SongsList from "../SongsList";

function PlaylistPage ({setSongs, songs, likeHandler}) {
//--- hooks ---
    const [playlist, setPlaylist] = useState("")
    const {playlistId} = useParams();

    const BASE_URL = process.env.BASE_API_URL || "http://localhost:5001"


    useEffect( ()=> {
        async function loadSongs () {
            const res = await (await fetch(`${BASE_URL}/playlists/songs/${playlistId}`)).json()
            setSongs(res.data)
        }; 
        
        async function loadPlaylist () {
            const res = await (await fetch(`${BASE_URL}/playlists/${playlistId}`)).json()
            setPlaylist(res.data.playlist_name)
        };

        loadSongs();
        loadPlaylist();
}, [])

//--- handlers ---
const addSong = async (newSong) => {
    const reqOpts = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data: newSong})
    }
    await fetch(`${BASE_URL}playlists/songs/${playlistId}`, reqOpts);
    const allSongs = await (await fetch(URL)).json()
        setSongs(allSongs.data)
}

function handleLike(indexToLike){
    const likeFiltered = songs.map((song, idx)=>{
      if (idx === indexToLike){
        song.liked = !song.liked
        return song
      }else{ return song}
    })
    setSongs(likeFiltered)
  };

//--- return ---
    return (
        <main>
            <h1 className="text-center">{playlist && `Playlist: ${playlist}`}</h1>
            <PostSong addSong={addSong}/>
            <SongsList songs={songs} handleLike={handleLike}/>
        </main>
    )
};


export default PlaylistPage;