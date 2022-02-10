import React, { useEffect, useState} from "react";
import {Dice, DiceValue} from "./Dice";
import {DicePanelProps, DicePlayer} from "../types";

export const DicePanel = (props: DicePanelProps) =>{
    const [player, setPlayer] = useState<DicePlayer>(props.player);

    useEffect(() => {
        if(props.player){
            setPlayer(props.player);
        }
    }, [props.player]);



    return <>
       <div>
           {player.name}
       </div>
        <Dice side={player.diceValue}/>
       <div>
           Wins: {player.wins}
       </div>
    </>
}
