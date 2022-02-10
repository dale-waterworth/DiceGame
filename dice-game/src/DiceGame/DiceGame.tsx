import React, {useReducer, useState} from 'react';
import {DicePanel} from "./DicePanel/DicePanel";
import {DiceGameStore, DicePlayer} from "./types";
import {DiceGameReducer} from "./DiceGameReducer";

export const DiceGame = () => {

    const player1: DicePlayer = {
        name: 'Player 1',
        wins: 0
    }
    const player2: DicePlayer = {
        name: 'Player 2',
        wins: 0
    }

    const initialState: DiceGameStore = {
        players: [player1, player2]
    };

    const [gameState, dispatch] = useReducer(DiceGameReducer, initialState)

    return <>
        {gameState.players.map((player, i) => <DicePanel key={i} player={player}/>)}

        <div>
            <button onClick={() => dispatch({action: 'spin'})}>Spin</button>
        </div>

    </>
}
