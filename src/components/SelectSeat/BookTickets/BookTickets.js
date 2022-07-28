import "./style.css";

export default function BookTickets() {
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