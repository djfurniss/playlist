import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./Header";
import PostSong from "./PostSong";
import SongsList from "./SongsList.js";

export default function App() {
//---state---
  const [songs, setSongs] = useState([])

//--- useEffect ---
  useEffect( ()=> {
      const { NODE_ENV } = process.env
      const URL = NODE_ENV === "production" 
      ? "https://playlist-2579-backend.herokuapp.com/" 
      : "http://localhost:5001"

    async function loadSongs () {
      const response = await (await fetch(URL)).json()
      setSongs(response.data)
    }

    loadSongs()
  }, [])
  
//---state changers---
  const addSong = (newSongObj) => setSongs([...songs, newSongObj])

  const deleteHandler = (indexToDel) => setSongs(songs.filter((_, index)=> index !== indexToDel));

  function likeHandler(indexToLike){
    const likeFiltered = songs.map((song, idx)=>{
      if (idx === indexToLike){
        song.liked = !song.liked
        return song
      }else{ return song}
    })
    setSongs(likeFiltered)
  };

//---return---
  return (
  <div>
      <Header/>
      <PostSong addSong={addSong}/>
      {songs.length ?
       <SongsList songs={songs} deleteHandler={deleteHandler} likeHandler={likeHandler}/>
      : <h1>Loading</h1>}
  </div>
  );
};