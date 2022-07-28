import "./reset.css"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "../Top/Top";
import SelectMovie from "../SelectMovie/SelectMovie";
import SelectSession from "../SelectSession/SelectSession";
import SelectSeat from "../SelectSeat/SelectSeat";

export default function App() {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<SelectMovie />} />
                <Route path="/sessoes/:movieID" element={<SelectSession />} />
                <Route path="/assentos/" element={<SelectSeat />} />
            </Routes>
        </BrowserRouter>
    );
}