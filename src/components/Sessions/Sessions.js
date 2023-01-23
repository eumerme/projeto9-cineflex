import "./style.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackButton from "../BackButton/BackButton";
import Loading from "../Loading/Loading";

export default function Sessions() {
	const { movieID } = useParams();
	const [sessions, setSessions] = useState(null);
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieID}/showtimes`);

		promise.then((res) => {
			console.log(res);
			setSessions(res.data.days);
			setMovie(res.data);
		});
	}, [movieID]);

	return (
		<>
			{!sessions && <Loading />}
			{sessions && (
				<>
					<BackButton />
					<Header>Selecione o horário</Header>
					{sessions.map((session) => (
						<Session key={session.id} date={session.date} weekday={session.weekday} showtimes={session.showtimes} />
					))}
					<Footer>
						<img src={movie.posterURL} alt="" />
						<h1>{movie.title}</h1>
					</Footer>
				</>
			)}
		</>
	);
}

function Session({ date, weekday, showtimes }) {
	return (
		<div className="session">
			<h1>{`${weekday} - ${date}`}</h1>
			<div>
				{showtimes.map((time) => (
					<Link key={time.id} to={`assentos/${time.id}`}>
						<div className="time">{time.name}</div>
					</Link>
				))}
			</div>
		</div>
	);
}
