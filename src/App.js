import { useState } from "react";
import "./styles/App.css";
import Header from "./Header";
import SongsList from "./SongsList.js";

//---data---
  const songsArr = [
    {
      title: "Merlot",
      artist: "Smino",
      year: "2021",
      liked: false
    },
    {
      title: "Say So",
      artist: "Doja Cat",
      year: "2019",
      liked: false
    },
    {
      title: "Good Days",
      artist: "SZA",
      year: "2020",
      liked: false
    },
  ];


export default function App() {
  // songs = [{title: "", artist: "", year: ""}]
  //button I want: sort by (year and title), filter by (artist and year), to get a random song, add a song, delete a song
//---state---
  const [songs, setSongs] = useState(songsArr)

//---state changes---
  function addSong(newSongObj){
    setSongs(...songs, newSongObj)
  }

  function deleteHandler(indexToDelete){
    setSongs(songs.filter((_, index)=>{
      return index !== indexToDelete
    }))
  }

  function likeHandler(indexToLike){
    // console.log(indexToLike)
    const likeFiltered = songs.map((song, idx)=>{
      if (idx === indexToLike){
        song.liked = !song.liked
        return song
      }else{ return song}
    })
    console.log(likeFiltered)
    setSongs(likeFiltered)
  }

//---return---
  return (
  <div>
      <Header/>
      <SongsList songs={songs} deleteHandler={deleteHandler} likeHandler={likeHandler}/>
  </div>
  );
}