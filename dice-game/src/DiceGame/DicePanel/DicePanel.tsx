import React, { useEffect, useState} from "react";
import {Dice} from "./Dice/Dice";
import {DicePanelProps, DicePlayer} from "../types";
import './DicePanel.css';

export const DicePanel = (props: DicePanelProps) =>{
    const [player, setPlayer] = useState<DicePlayer>(props.player);

    useEffect(() => {
        if(props.player){
            setPlayer(props.player);
        }
    }, [props.player]);



    return <>
      <div className={'dice-panel-wrapper'}>
          <div>
              {player.name}
          </div>
          <Dice side={player.diceValue}/>
          <div>
              Wins: {player.wins}
          </div>
      </div>
    </>
}
