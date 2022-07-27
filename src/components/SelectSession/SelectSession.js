import "./style.css";
import { useState, useEffect } from "react";
import Header from "../Common/Header";
import axios from "axios";

function Session() {
    return (
        <div className="session" >
            <h1>Quinta-feira - 24/06/2021</h1>
            <div className="time">15:00</div>
        </div>
    );

}

export default function SelectSession() {
    /* const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        request.then(response => { setSessions(response.data) })
    }, []) */

    return (
        <>
            <Header info="Selecione o horário" />
            <Session />
        </>
    );
}