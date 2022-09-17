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
        // console.log(formData)
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
                    className="btn btn-success my-3"
                    >Add Song
                </button>
            </form>
        </div>
    );
};