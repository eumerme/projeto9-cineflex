import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectSeat from "./components/Seats/Seats";
import Success from "./components/Success/Sucess";
import Movies from "./components/Movies/Movies";
import Sessions from "./components/Sessions/Sessions";

export default function App() {
	return (
		<BrowserRouter>
			<div className="top">CINEFLEX</div>
			<Routes>
				<Route path="/" element={<Movies />} />
				<Route path="/sessoes/:movieID" element={<Sessions />} />
				<Route path="/sessoes/:movieID/assentos/:sessionID" element={<SelectSeat />} />
				<Route path="/sucesso" element={<Success />} />
			</Routes>
		</BrowserRouter>
	);
}
