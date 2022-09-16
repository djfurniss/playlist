import React from "react"
export default function SongCard({song, deleteHandler, likeHandler}){

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
};