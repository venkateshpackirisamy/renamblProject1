import { useLocation } from "react-router-dom";

function Card() {
    const { state } = useLocation();
    return (
        <div className="selectedCard">
            <div>
                <h3> {state[0].toUpperCase()}</h3>
                <img src={state[1]['img']} width="600px"></img>
                <p>{state[1]['description']}</p>
            </div>
        </div>
    )
}
export default Card