import Square from '../Square/Square';
import './Board.css';

export default function Board({ boardStatus }) {

    const boardComponent = [];
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            boardComponent.push((
            <Square 
                key={ `normal board: i ${i}, j ${j}`}
                squareStatus={boardStatus[i][j]}
                i={i} j={j}/>))
        }
    }

    return (
        <div
        id="board">
            {boardComponent}
        </div>
    )
}