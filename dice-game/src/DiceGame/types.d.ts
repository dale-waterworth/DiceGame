import {DiceValue} from "./DicePanel/Dice/Dice";

export type DicePlayer = {
    name:string;
    wins: number;
    diceValue?: DiceValue;
}

export type DicePanelProps = {
    player: DicePlayer
}

export interface DiceGameStore {
    players: DicePlayer[];
}

export interface DiceGameAction {
    action: 'spin'
}
