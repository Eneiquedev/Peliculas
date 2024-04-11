import { useState, useEffect } from "react"
import { get } from "../data/httpClient"
import {Moviecard} from "../components/MovieCard"

export function ContextMovieCard() {
    const[movies,SetMovies] =useState([])
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            SetMovies(data.results);
        });
    }, [])
    return(
        <ul>
            {movies.map((movie)=>(
                <Moviecard />
            ))}
        </ul>
    )
}