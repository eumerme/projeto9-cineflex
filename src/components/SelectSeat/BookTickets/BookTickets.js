import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../../BackButton/BackButton";

export default function BookTickets({ seatSelected, nameSeat, title, weekday }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        const dataAPI = {
            ids: seatSelected,
            name,
            cpf,
        };
        const dataSuccess = {
            title,
            weekday,
            nameSeat,
            name,
            cpf,
        };

        if (seatSelected.length === 0) {
            alert("Por favor, selecione um assento.");
        } else {
            const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", dataAPI);
            promise.then(navigate("/sucesso", { replace: false, state: dataSuccess }));

            setName("");
            setCpf("");
        };
    };

    return (
        <>
            <BackButton />
            <form onSubmit={handleForm}>
                <div className="forms">
                    <div className="input">
                        <label htmlFor="nome">Nome do comprador:</label>
                        <input
                            type="text"
                            id="nome"
                            value={name}
                            placeholder="Digite seu nome..."
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input
                            type="text"
                            id="cpf"
                            value={cpf}
                            placeholder="Digite seu CPF..."
                            pattern="[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"
                            required
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>
                    <button className="book-button" type="submit">Reservar assento(s)</button>
                </div>
            </form>
        </>
    );
}