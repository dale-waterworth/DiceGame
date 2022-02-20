import React, {useReducer} from 'react';
import {DicePanel} from "./DicePanel/DicePanel";
import {DiceGameStore} from "./types";
import {DiceGameReducer} from "./DiceGameReducer";
import './DiceGame.css';

export const DiceGame = () => {
    const initialState: DiceGameStore = {
        players: [{
            name: 'Player 1',
            wins: 0
        }, {
            name: 'Player 2',
            wins: 0
        }]
    };

    const [gameState, dispatch] = useReducer(DiceGameReducer, initialState)

    return <>
        <div className={'dice-panels'}>
            {gameState.players
                .map((player, i) => <DicePanel key={i} player={player}/>)}
        </div>

        <div className={'spin-wrapper'}>
            <div>
                <button onClick={() => dispatch({action: 'spin'})}>
                    Spin
                </button>
            </div>
        </div>
    </>
}
