import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import "./styles/App.css";
import Header from "./Header";
import PostSong from "./PostSong";
import SongsList from "./SongsList.js";
import PageNotFound from "./PageNotFound"
import Home from "./Home/Home";
import NewPlaylist from "./NewPlaylist/NewPlaylist";
import JoinPlaylist from "./JoinPlaylist/JoinPlaylist";
import PlaylistPage from "./PlaylistPage/PlaylistPage";

export default function App() {
//---state---
  const [songs, setSongs] = useState([])

//---return---
  return (
  <div>
    <Routes>
      <Route 
        path="/" 
        element={<Home/>}
        />
      <Route 
        path="/playlist/new" 
        element={<NewPlaylist/>}
        />
      <Route 
        path="/playlist/join" 
        element={<JoinPlaylist/>}
        />
      <Route 
        path="/playlist/:playlistId" 
        element={
        <PlaylistPage 
          songs={songs} 
          setSongs={setSongs}/>}
        />
        <Route 
        path="*"
        element={<PageNotFound/>}
        />
    </Routes>
        
  </div>
  );
};