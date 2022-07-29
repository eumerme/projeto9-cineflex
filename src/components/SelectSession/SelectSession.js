import "./style.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";

function Sessions({ date, weekday, showtimes }) {
    return (
        <div className="session" >
            <h1>{`${weekday} - ${date}`}</h1>
            <div>
                {showtimes.map(time => (
                    <Link key={time.id} to={`assentos/${time.id}`}>
                        <div className="time">{time.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );

}

export default function SelectSession() {
    const { movieID } = useParams();
    const [sessions, setSessions] = useState([]);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieID}/showtimes`);

        request.then(response => {
            setSessions(response.data.days)
            setMovie(response.data)
        })
    }, [movieID]);

    return (
        <>
            <Header>
                <div className="header">Selecione o horário</div>
            </Header>
            {sessions.map(session => (
                <Sessions
                    key={session.id}
                    date={session.date}
                    weekday={session.weekday}
                    showtimes={session.showtimes}
                />
            ))}
            <Footer>
                <div className="footer">
                    <img src={movie.posterURL} alt="" />
                    <h1>{movie.title}</h1>
                </div>
            </Footer>
        </>
    );
}