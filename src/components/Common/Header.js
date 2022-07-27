import "./style.css";

export default function Header({ info }) {
    return (
        <div className="header" >
            {info}
        </div>
    );
}