import "./style.css"
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function Success({ movie }) {
    console.log(movie)
    return (
        <>
            <Header>
                <div className="header success">Pedido feito com sucesso!</div>
            </Header >
            <Main>
                <div className="sucess-info">
                    <h1>Filme e Sessão</h1>
                    <h2>Enola Holmes</h2>
                    <h2>24/06/2021</h2>
                </div>
                <div className="sucess-info">
                    <h1>Ingressos</h1>
                    <h2>Assento</h2>
                </div>
                <div className="sucess-info">
                    <h1>Comprador</h1>
                    <h2>{`Nome: `}</h2>
                    <h2>{`CPF: `}</h2>
                </div>
                <Link to={`/`}>
                    <div className="home">Voltar pra Home</div>
                </Link>
            </Main>
        </>
    );
}