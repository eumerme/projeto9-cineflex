import "./reset.css"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectMovie from "../SelectMovie/SelectMovie";
import SelectSession from "../SelectSession/SelectSession";
import SelectSeat from "../SelectSeat/SelectSeat";

export default function App() {
    return (
        <BrowserRouter>
            <div className="top">CINEFLEX</div>
            <Routes>
                <Route path="/" element={<SelectMovie />} />
                <Route path="/sessoes/:movieID" element={<SelectSession />} />
                <Route path="/sessoes/:movieID/assentos/:sessionID" element={<SelectSeat />} />
            </Routes>
        </BrowserRouter>
    );
}