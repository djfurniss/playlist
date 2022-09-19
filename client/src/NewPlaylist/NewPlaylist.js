import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const shortid = require("shortid")

function NewPlaylist() {
    const navigate = useNavigate();

    // console.log(shortid.generate())

    const [formData, setFormData] = useState({playlistName: ""})

//---handlers---
    const handleSubmit = async(event) => {
        event.preventDefault();

        const playlist_id = shortid.generate();
        const playlist_name = formData.playlistName
        const URL = `http://localhost:5001/new-playlist/${playlist_id}`
        const reqOpts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data: {playlist_name, playlist_id}})
        }

        await fetch(URL, reqOpts)
        navigate(`/playlist/${playlist_id}`)
    }

    const handleInputChange = ({target}) => {
        setFormData({...formData, [target.name] : target.value})
    }

//---return---
    return (
        <main>
            <h1 className="text-center mt-3">Create a new Playlist</h1>
            <form 
                onSubmit={handleSubmit}
                className="card p-4 m-4">
                <label htmlFor="playlistName">Name your playlist:</label>
                <input
                    name="playlistName"
                    value={formData.playlistName}
                    onChange={handleInputChange}
                    className="form-control"/>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary mx-2 my-2">Submit</button>
                    <button
                        onClick={()=>{navigate("/playlist")}}
                        className="btn btn-secondary mx-2 my-2">Cancel</button>
                </div>
            </form>
        </main>
    )
};

export default NewPlaylist;