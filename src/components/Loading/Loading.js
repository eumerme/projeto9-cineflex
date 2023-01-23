import "./style.css";
import loading from "../../components/assets/ico_loading.gif";

export default function Loading() {
	return (
		<div className="loading">
			<img src={loading} alt="carregando" />
		</div>
	);
}
