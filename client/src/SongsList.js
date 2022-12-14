import React from "react";
import SongCard from "./SongCard"
export default function SongsList({songs, deleteHandler, handleLike}){

//---return---
    return (
        <div className="container mx-auto">
            <h1>Current Playlist</h1>
            {<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {songs.map((song, index)=> <SongCard 
                key={index}
                song={song}
                deleteHandler = {()=>{}}
                likeHandler={()=>handleLike(index)}
                />)}
            </div>}
        </div>
    )
};