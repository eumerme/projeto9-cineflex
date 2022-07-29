import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function BookTickets({ seatSelected }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    const book = (e) => {
        console.log(e, "onsubit")
        e.preventDefault();

        const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: seatSelected,
            name,
            cpf,
        });

        console.log(request)

        console.log(name, "name", cpf, "cpf")
        setName("");
        setCpf("");
    };

    return (
        <form onSubmit={book}>
            <div className="forms">
                <div className="input">
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input
                        type="text"
                        id="nome"
                        value={name}
                        placeholder="Digite seu nome..."
                        required
                        onChange={e => { setName(e.target.value); console.log(e, "onchange") }}
                    />
                </div>
                <div className="input">
                    <label htmlFor="number">CPF do comprador:</label>
                    <input
                        type="text"
                        id="text"
                        value={cpf}
                        placeholder="Digite seu CPF..."
                        required
                        onChange={e => setCpf(e.target.value)}
                    />
                </div>
                <button type="submit">Reservar assento(s)</button>
            </div>
        </form>
    );
}