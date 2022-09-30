import React from "react";
import { useNavigate } from "react-router-dom"

function Home () {
    const navigate = useNavigate();

    return (
        <main>
            <h1 className="text-center">Welcome to GrouPlaylist</h1>
            <div className="text-center">
                <p 
                    onClick={()=>{navigate("playlist/new/")}}
                    className="btn btn-secondary m-2">Start a GrouPlaylist</p>
                <p 
                    onClick={()=>{navigate("playlist/join/")}}
                    className="btn btn-secondary m-2">Join a GrouPlaylist</p>
            </div>
        </main>
    )
};

export default Home;