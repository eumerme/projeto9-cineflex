import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

export default function Movies() {
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		promise.then((res) => setMovies(res.data));
	}, []);

	return (
		<>
			{!movies && <Loading />}
			{movies && (
				<>
					<Header>Selecione o filme</Header>
					<div className="select-movie">
						{movies.map((movie) => (
							<Link to={`/sessoes/${movie.id}`}>
								<div className="movie">
									<img src={movie.posterURL} alt={movie.title} />
								</div>
							</Link>
						))}
					</div>
				</>
			)}
		</>
	);
}
