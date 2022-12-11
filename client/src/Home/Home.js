import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { test } from "../utils/api"

function Home () {

const CLIENT_ID = "fc77e26dd7e54da399a17ce5607772e1"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

    const navigate = useNavigate();

    useEffect(()=>{
        test().then(res=>console.log(res))
    }, [])
    // const [token, setToken] = useState("")
    // const [searchKey, setSearchKey] = useState("")
    // const [songs, setSongs] = useState([])

    // useEffect(() => {
    //     const hash = window.location.hash
    //     let token = window.localStorage.getItem("token")
    
    //     if (!token && hash) {
    //         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
    //         window.location.hash = ""
    //         window.localStorage.setItem("token", token)
    //     }
    
    //     setToken(token)
    
    // }, [])

    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    // };

    // const searchArtists = async (e) => {
    //     e.preventDefault()
    //     const {data} = await axios.get("https://api.spotify.com/v1/search/", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: searchKey,
    //             type: "track",
    //             "include_external": "audio",
    //         }
    //     })
    //     console.log(data.tracks.items)
    //     setSongs(data.tracks.items)
    // }

    return (
        <main>
            {/* <div className="App">
                <header className="App-header">
                    <h1>Spotify React</h1>
                    {!token ?
                        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                            to Spotify</a>
                        : <button onClick={logout}>Logout</button>}
                </header>
            </div>

            <form onSubmit={searchArtists}>
                <input type="text" onChange={({ target }) => setSearchKey(target.value)}/>
                <button type={"submit"}>Search</button>
            </form>

           {songs.length && songs.map(song => (
                <div key={song.id}>
                    <p>{song.name} by {song.artists[0].name}</p>
                </div>
            ))} */}
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