import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css"
import "./style.css"
import Top from "../Top/Top";
import SelectMovie from "../SelectMovie/SelectMovie";
import SelectSession from "../SelectSession/SelectSession";

export default function App() {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                {/* <Route path="/" element={<SelectMovie />} /> */}
                <Route path="/sessoes" element={<SelectSession />} />
            </Routes>
        </BrowserRouter>
    );
}