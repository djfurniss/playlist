import { useState } from "react"
export default function SongCard({song, deleteHandler, likeHandler}){

//---state---
    // console.log(song)

//---return---
    return (
        <div className="col mb-2">
            <div className={song.liked ? "card border border-end border-success border-4" : "card"}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Song: {song.title}</li>
                    <li className="list-group-item">Artist: {song.artist}</li>
                    <li className="list-group-item">Year: {song.year}</li>
                <div className="d-flex justify-content-around p-2">
                    <button
                    name="like"
                    className="btn btn-success"
                    onClick={likeHandler}>{song.liked ? "Unlike" : "Like"}
                    </button>
                    <button 
                    name="delete"
                    className="btn btn-danger"
                    onClick={deleteHandler}>Delete
                    </button>
                </div>
                </ul>
            </div>
        </div>
    )
    /*
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-horizontal list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
    */
}