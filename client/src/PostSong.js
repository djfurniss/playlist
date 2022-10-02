import React, { useState } from "react";
export default function PostSong({addSong}){

const INIT_FORM = {
    name: "",
    artist: "",
    year: "",
    liked: false
  }
    const [formData, setFormData] = useState(INIT_FORM)

    const handleInputChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await addSong(formData);
        setFormData(INIT_FORM);
    }

//---return---
    return(
        <div>
            <h2 className="text-center">Add a Song</h2>
            <form onSubmit={handleSubmit} className="container">
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"/>
                <label>Artist</label>
                <input 
                    type="text"
                    name="artist"
                    value={formData.artist}
                    onChange={handleInputChange}
                    className="form-control"/>
                <label>Year</label>
                <input 
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="form-control"/>
                <button
                    type="submit"
                    className="btn btn-outline-success my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Add Song
                </button>
            </form>
        </div>
    );
};