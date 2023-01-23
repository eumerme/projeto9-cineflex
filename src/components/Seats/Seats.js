import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BookTickets from "./BookTickets/BookTickets";
import BackButton from "../BackButton/BackButton";
import Loading from "../Loading/Loading";

export default function Seats() {
	const { sessionID } = useParams();
	const [seats, setSeats] = useState(null);
	const [movie, setMovie] = useState(null);
	const [seatSelected, setSeatSelected] = useState([]);
	const [nameSeat, setNameSeat] = useState([]);

	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`);

		promise.then((res) => {
			setSeats(res.data.seats);
			setMovie(res.data);
		});
	}, [sessionID]);

	return (
		<>
			{!movie && <Loading />}
			{movie && (
				<>
					<BackButton />
					<Header>Selecione o(s) assento(s)</Header>
					<div className="main">
						<div className="seats">
							{seats.map((seat) => (
								<SelectSeats
									key={seat.id}
									seatId={seat.id}
									name={seat.name}
									isAvailable={seat.isAvailable}
									seatSelected={seatSelected}
									setSeatSelected={setSeatSelected}
									nameSeat={nameSeat}
									setNameSeat={setNameSeat}
								/>
							))}
						</div>
						<div className="info">
							<div>
								<div className="seat selected"></div>
								<h1>Selecionado</h1>
							</div>
							<div>
								<div className="seat"></div>
								<h1>Disponível</h1>
							</div>
							<div>
								<div className="seat unavailable"></div>
								<h1>Indisponível</h1>
							</div>
						</div>
						<BookTickets
							seatSelected={seatSelected}
							nameSeat={nameSeat}
							title={movie.movie.title}
							weekday={movie.day.weekday}
						/>
					</div>
					<Footer>
						<img src={movie.movie.posterURL} alt="" />
						<div>
							<h1>{movie.movie.title}</h1>
							<h2>{`${movie.day.weekday} - ${movie.name}`}</h2>
						</div>
					</Footer>
				</>
			)}
		</>
	);
}

function SelectSeats({ name, isAvailable, seatId, seatSelected, setSeatSelected, nameSeat, setNameSeat }) {
	const [selected, setSelected] = useState(false);

	const bookSeat = (id, name) => {
		const isSelected = seatSelected.some((seatId) => seatId === id);

		if (seatSelected.length === 0 || !isSelected) {
			setSeatSelected([...seatSelected, id]);
			setNameSeat([...nameSeat, name]);
		} else {
			setSeatSelected(seatSelected.filter((seatId) => seatId !== id));
			setNameSeat(nameSeat.filter((seatName) => seatName !== name));
		}
	};

	return (
		<>
			{isAvailable && (
				<div
					onClick={() => {
						setSelected(!selected);
						bookSeat(seatId, name);
					}}
					className={`seat ${selected ? "selected" : ""}`}
				>
					{name}
				</div>
			)}
			{!isAvailable && (
				<div onClick={() => alert("Esse assento não está disponível.")} className="seat unavailable">
					{name}
				</div>
			)}
		</>
	);
}
