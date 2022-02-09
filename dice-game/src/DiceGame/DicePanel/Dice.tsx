import React, {useEffect, useState } from 'react';
import './Dice.css';

export enum DiceSide {
    ONE = "1", TWO = "2", THREE = "3", FOUR = "4", FIVE = "5", SIX = "6"
}

export type DiceProps = {side?: DiceSide};

export const Dice = (props: DiceProps) => {

    const [dice, setDice] = useState<DiceSide>(
        DiceSide.ONE
    );

    useEffect(() => {
       if(props.side){
           setDice(props.side);
       }
    }, [props.side])

    return <>
    <span className="dice-wrapper">
        {dice}
    </span>
    </>
}
