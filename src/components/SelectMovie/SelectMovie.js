import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";

function Movie({ posterURL, movieID, title }) {
    return (
        <Link to={`/sessoes/${movieID}`}>
            <div className="movie">
                <img src={posterURL} alt={title} />
            </div>
        </Link>
    );
}

export default function SelectMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then(response => setMovies(response.data))
    }, []);

    return (
        <>
            <Header>
                <div className="header">Selecione o filme</div>
            </Header >
            <div className="select-movie" >
                {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        posterURL={movie.posterURL}
                        movieID={movie.id}
                        title={movie.title}
                    />
                ))}
            </div>
        </>
    );
}