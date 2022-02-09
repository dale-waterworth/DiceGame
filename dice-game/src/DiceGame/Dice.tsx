import React, {useEffect, useState } from 'react';
import './Dice.css';

export enum DiceSide {
    ONE = "1", TWO = "2", THREE = "3", FOUR = "4", FIVE = "5", SIX = "6"
}

const initialState = {
    side: DiceSide.ONE
}
export type DiceState = Readonly<typeof initialState>;
export type DiceProps = {side?: DiceSide};

export const Dice = ({side}: DiceProps) => {

    const [dice, setDice] = useState<DiceState>(initialState);

    useEffect(() => {
       if(side){
           setDice({side});
       }
    }, [side])

    return <>
    <span className="dice-wrapper">
        {dice.side}
    </span>
    </>
}
