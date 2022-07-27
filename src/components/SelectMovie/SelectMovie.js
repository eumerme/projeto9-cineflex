import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Common/Header";

function Movie({ posterURL }) {
    console.log(posterURL)
    return (
        <img className="movie" scr={posterURL} alt="" />
    );
}

export default function SelectMovie() {
     const [movies, setMovies] = useState([]);
 
     useEffect(() => {
         const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
 
         request.then(response => { setMovies(response.data) })
     }, []);

    return (
        <>
            <Header info="Selecione o filme" />
            <div className="select-movie" >
                {movies.map(movie => <Movie key={movie.id} posterURL={movie.posterURL} />)}
            </div>
        </>
    );
}