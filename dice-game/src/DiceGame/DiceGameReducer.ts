import {DiceGameStore, DiceGameAction} from "./types";
import {DiceSpinner} from "./DiceSpinner";

export const DiceGameReducer = (
    state: DiceGameStore,
    action: DiceGameAction
): DiceGameStore => {

    const newState = {
        'spin': () => spin(state)
    }[action.action]();

    return newState;
}

const spin = (state: DiceGameStore): DiceGameStore => {
    const diceRolls = Array.from(Array(state.players.length), () => DiceSpinner())

    const winningPlayer = isDraw(diceRolls) ? null : diceRolls.indexOf(Math.max(...diceRolls));

    const players = state.players
        .map((player, i) => {
            player.diceValue = diceRolls[i];

            if (playerIsWinner(winningPlayer, i)) {
                player.wins++;
            }

            return player;
        });

    return {...state, ...players};
}

const playerIsWinner = (winningPlayer: null | number, i: number) => {
    return winningPlayer != null && winningPlayer === i;
}

const isDraw = (numbers: number[]) => {
    return new Set(numbers).size === 1;
}
