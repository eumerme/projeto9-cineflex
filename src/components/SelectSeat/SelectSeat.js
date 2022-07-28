import "./style.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function BookTickets() {
    return (
        <div className="book-tickets">
            <div className="forms">
                <form action="" method="post">
                    <div className="input">
                        <label htmlFor="nome">Nome do comprador:</label>
                        <input type="text" id="nome" placeholder="Digite seu nome..." />
                    </div>
                    <div className="input">
                        <label htmlFor="number">CPF do comprador:</label>
                        <input type="number" id="number" placeholder="Digite seu CPF..." />
                    </div>
                </form>
            </div>
            <div className="book">Reservar assento(s)</div>
        </div>
    );
}

function Seats({ name, isAvailable }) {
    const [selected, setSelected] = useState(false);

    return (
        <div
            onClick={() => setSelected(!selected)}
            className={`seat ${isAvailable ? "" : "unavailable"} ${!selected ? "" : "selected"}`}
        >
            {name}
        </div>
    )
}

export default function SelectSeat() {
    const { sessionID } = useParams();
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);

        request.then(response => {
            setSeats(response.data.seats)
            setMovie(response.data)
        })
    }, []);

    return (
        <>
            {(movie.length !== 0) ? (
                <>
                    <Header>
                        <div className="header">Selecione o(s) assento(s)</div>
                    </Header>
                    <Main>
                        <div className="seats">
                            {seats.map(seat => (
                                <Seats
                                    key={seat.id}
                                    name={seat.name}
                                    isAvailable={seat.isAvailable}
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
                        <BookTickets />
                    </Main>
                    <Footer>
                        <div className="footer">
                            <img src={movie.movie.posterURL} alt="" />
                            <div>
                                <h1>{movie.movie.title}</h1>
                                <h2>{`${movie.day.weekday} - ${movie.name}`}</h2>
                            </div>
                        </div>
                    </Footer>
                </>
            ) : ("")}
        </>
    );
}