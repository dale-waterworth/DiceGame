import {DiceGameStore, GameAction} from "./types";
import {DiceSpinner} from "./DiceSpinner";

export const DiceGameReducer = (
    state: DiceGameStore,
    action: GameAction
): DiceGameStore => {

    const newState = {
        'spin': () => spin(state)
    }[action.action]();

    return newState;
}

const spin = (state: DiceGameStore): DiceGameStore => {
    const diceRolls = Array.from(Array(state.players.length), () => DiceSpinner())

    const winner = isDraw(diceRolls) ? null : diceRolls.indexOf(Math.max(...diceRolls));

    const players = state.players
        .map((player, i) => {
            player.diceValue = diceRolls[i];
            if (winner != null && winner === i) {
                player.wins++;
            }
            return player;
        });

    return {...state, ...players};
}

const isDraw = (numbers: number[]) => {
    return new Set(numbers).size === 1;
}
