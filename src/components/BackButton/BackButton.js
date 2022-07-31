import "./style.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/chevron-back-outline.svg";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <BackIcon
            onClick={() => navigate(-1)}
            className="returnTo"
        />
    );
}