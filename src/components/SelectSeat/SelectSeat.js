import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import BookTickets from "./BookTickets/BookTickets";

function Seats({
    name,
    isAvailable,
    seatId,
    seatSelected,
    setSeatSelected,
    nameSeat,
    setNameSeat
}) {
    const [selected, setSelected] = useState(false);

    const bookSeat = (id, name) => {
        const isSelected = seatSelected.some(seatId => seatId === id);

        if (seatSelected.length === 0 || !isSelected) {
            setSeatSelected([...seatSelected, id]);
            setNameSeat([...nameSeat, name]);
        } else {
            setSeatSelected(seatSelected.filter(seatId => seatId !== id));
            setNameSeat(nameSeat.filter(seatName => seatName !== name));
        };
    };

    return (
        <>
            {isAvailable ? (
                <div
                    onClick={() => {
                        setSelected(!selected);
                        bookSeat(seatId, name)
                    }}
                    className={`seat ${selected ? "selected" : ""}`}
                >
                    {name}
                </div>
            ) : (
                <div
                    onClick={() => alert("Esse assento não está disponível")}
                    className="seat unavailable"
                >
                    {name}
                </div>
            )}
        </>
    );
}

export default function SelectSeat() {
    const { sessionID } = useParams();
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [seatSelected, setSeatSelected] = useState([]);
    const [nameSeat, setNameSeat] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`);

        promise.then(response => {
            setSeats(response.data.seats)
            setMovie(response.data)
        })
    }, [sessionID]);

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