import React, {useEffect, useState} from 'react';
import './Dice.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons'
import {IconProp} from '@fortawesome/fontawesome-svg-core'

export enum DiceValue {
    ONE = 1, TWO = 2, THREE = 3, FOUR = 4, FIVE = 5, SIX = 6
}

export type DiceProps = { side?: DiceValue };

export const Dice = (props: DiceProps) => {

    const [dice, setDice] = useState(
        <>
            <FontAwesomeIcon size={'3x'} color={'blue'} icon={faDiceOne}/>
            <span>{DiceValue.ONE}</span>
        </>
    );

    useEffect(() => {
        if (props.side) {
            setDice(<>
                <FontAwesomeIcon size={'3x'} color={'blue'} icon={getIcon(props.side)}/>
                <span>{props.side}</span>
            </>)
        }
    }, [props.side])

    return <>
        <div className="dice-wrapper">
            {dice}
        </div>
    </>
}

const getIcon = (side: DiceValue): IconProp => {
    return {
        [DiceValue.ONE]: () => faDiceOne,
        [DiceValue.TWO]: () => faDiceTwo,
        [DiceValue.THREE]: () => faDiceThree,
        [DiceValue.FOUR]: () => faDiceFour,
        [DiceValue.FIVE]: () => faDiceFive,
        [DiceValue.SIX]: () => faDiceSix,
    }[side]();

}

