import React from 'react';
import {DicePanel} from "./DicePanel/DicePanel";

export const DiceGame = () =>{

    const spin = () =>{

    }

    return <>
        <DicePanel name={'Player'}/>
        <DicePanel name={'Computer'}/>
       <div>
           <button onClick={spin}>Spin</button>
       </div>
    </>
}
