import { useSelector } from 'react-redux';
import Board from '../Board/Board'
import './FreeGame.css';

export default function FreeGame() {

    const aiBoard = useSelector((state) => state.aiBoard);

    return (
        <div>
            <div id="freeBoard">
                <div>
                    <Board boardStatus={aiBoard}/>
                    <h2 className="freeAi">AI</h2>
                </div>
            </div>
        </div>
      );
}