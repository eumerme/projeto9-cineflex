import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function Success() {
    const { state } = useLocation();

    return (
        <>
            <Header>
                <div className="header success">Pedido feito com sucesso!</div>
            </Header >
            <Main>
                <div className="sucess-info">
                    <h1>Filme e Sessão</h1>
                    <h2>{state.title}</h2>
                    <h2>{state.weekday}</h2>
                </div>
                <div className="sucess-info">
                    <h1>Ingressos</h1>
                    {state.nameSeat.map((seat, index) => (
                        <h2 key={index}>{`Assento ${seat}`}</h2>
                    ))}
                </div>
                <div className="sucess-info">
                    <h1>Comprador(a)</h1>
                    <h2>{`Nome: ${state.name}`}</h2>
                    <h2>{`CPF: ${state.cpf}`}</h2>
                </div>
                <Link to="/">
                    <div className="home">Voltar pra Home</div>
                </Link>
            </Main>
        </>
    );
}