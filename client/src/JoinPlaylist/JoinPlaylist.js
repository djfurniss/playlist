import React from "react";
import { useNavigate } from "react-router-dom";

function JoinPlaylist (){
//--- hooks ---
    const navigate = useNavigate();

//--- handlers ---
const handleSubmit = (event) => {
    event.preventDefault()
    // ! TODO: make sure playlist exists before naviagting
    // * navigate(`/playlist/${event.target.playlistId.value}`)
}
//--- return ---
    return (
        <main>
            <h1 className="text-center mt-3">Join your friend's playlist</h1>
            <form 
                onSubmit={handleSubmit}
                className="card p-4 m-4">
                <label htmlFor="usersName">Your name:</label>
                <input
                    name="usersName"
                    className="form-control"/>
                <label htmlFor="playlistId">Playlist ID:</label>
                <input
                    name="playlistId"
                    className="form-control"/>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary mx-2 my-2">Join</button>
                    <button
                        onClick={()=>{navigate("/")}}
                        className="btn btn-secondary mx-2 my-2">Cancel</button>
                </div>
            </form>
        </main>
    )
}

export default JoinPlaylist