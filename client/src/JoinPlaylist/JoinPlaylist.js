import React from "react";
import { useNavigate } from "react-router-dom";

function JoinPlaylist (){
    const navigate = useNavigate();

    return (
        <main>
            <h1 className="text-center mt-3">Join your friend's playlist</h1>
            <form 
                onSubmit={(event)=>{event.preventDefault()}}
                className="card p-4 m-4">
                <label htmlFor="usersName">Your name:</label>
                <input
                    name="usersName"
                    className="form-control"/>
                <label htmlFor="playlistName">Playlist ID:</label>
                <input
                    name="playlistName"
                    className="form-control"/>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary mx-2 my-2">Join</button>
                    <button
                        onClick={()=>{navigate("/playlist")}}
                        className="btn btn-secondary mx-2 my-2">Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default JoinPlaylist