import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostSong from "../PostSong";
import SongsList from "../SongsList";
import { loadPlaylist, loadSongs } from "../utils/api"

function PlaylistPage ({setSongs, songs, likeHandler}) {
//--- hooks ---
    const [playlist, setPlaylist] = useState("")
    const [err, setErr] = useState(null)
    const { playlistId } = useParams();

    const BASE_URL = process.env.BASE_API_URL || "http://localhost:5001"


    useEffect( ()=> {
        loadPlaylist(playlistId).then(setPlaylist).catch(setErr)
        
        !err && loadSongs(playlistId).then(setSongs)
        // async function loadSongs () {
        //     const res = await (await fetch(`${BASE_URL}/playlists/songs/${playlistId}`)).json()
        //     setSongs(res.data)
        // }; 
        
        // async function loadPlaylist () {
        //     const res = await (await fetch(`${BASE_URL}/playlists/${playlistId}`)).json()
        //     setPlaylist(res.data.playlist_name)
        // };

        // loadSongs();
        // loadPlaylist();
}, [songs]);

// console.log(err)

//--- handlers ---
const addSong = async (newSong) => {
    // const URL = `${BASE_URL}/playlists/songs/${playlistId}`
    // const reqOpts = {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({data: newSong})
    // }
    // await fetch(URL, reqOpts);
    // const res = await fetch(URL)
    // const allSongs = await res.json()
    // console.log(allSongs)
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