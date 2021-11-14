import { useParams, Link, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { changeShowRule } from "../../actions/actions";
import NormalGame from "../NormalGame/NormalGame";
import FreeGame from "../FreeGame/FreeGame";
import { reset, goHome } from "../../actions/actions";
import "./Game.css";

export default function Game(props) {
    let params = useParams();
    let game = params.game;
    const dispatch = useDispatch();

    return (
        // <DndProvider backend={HTML5Backend}>
        <div>
            <Link to={window.location.pathname}><button className="button reset" onClick={
                ()=>dispatch(reset())
            }>Reset</button></Link>
            <button onClick={()=> dispatch(changeShowRule())} className="button rule">?</button>
            <Link to="/" onclick={()=>{
                dispatch(goHome());
                window.location.reload()}}>
                    <button className="button homepage">Home</button></Link>
            <div className="gameBoard">
                {(game === 'freegame') ? <FreeGame /> : 
                ((game === 'normalgame') ? <NormalGame /> : <Redirect to="/"/>)}
            </div>
        </div>
        // </DndProvider>
    )
}
