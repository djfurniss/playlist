import React, { useState } from "react";
export default function PostSong({addSong}){

const INIT_FORM = {
    title: "",
    artist: "",
    year: null,
    liked: false
  }
    const [formData, setFormData] = useState(INIT_FORM)

    const handleInputChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addSong(formData);
        setFormData(INIT_FORM);
    }

//---return---
    return(
        <div>
            <h2 className="text-center">Add a Song</h2>
            <form onSubmit={handleSubmit} className="container">
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    value={formData.title}
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
                    className="btn btn-success my-3"
                    >Add Song
                </button>
            </form>
        </div>
    );
};