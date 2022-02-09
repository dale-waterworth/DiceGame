import React, {useEffect, useState} from "react";
import {Dice, DiceSide} from "./Dice";

export type DicePanelProps = {
    name:string;
    score?: number;
    dice?: DiceSide;
}

export const DicePanel = (props : DicePanelProps) =>{

    const [dice, setDice] = useState<DiceSide>();
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        if(props.dice){
            setDice(props.dice);
        }
    }, [props.dice]);

    useEffect(() => {
        if(props.score){
            setScore(props.score);
        }
    }, [props.score]);

    return <>
       <div>
           {props.name}
       </div>
        <Dice side={dice}/>
       <div>
           Wins: {score}
       </div>
    </>
}
