import React from 'react';
import {render, screen} from '@testing-library/react';
import {DicePanel} from "./DicePanel";
import {DiceSide} from "./Dice";

it('should display default display', () => {
    render(<DicePanel name={'player 1'}/>);

    const nameElement = screen.getByText('player 1');
    expect(nameElement).toBeInTheDocument();
    const scoreElement = screen.getByText('Wins: 0');
    expect(scoreElement).toBeInTheDocument();
});

it('should display custom display', () => {
    render(<DicePanel name={'player 1'} dice={DiceSide.FIVE} score={42}/>);

    const nameElement = screen.getByText('player 1');
    expect(nameElement).toBeInTheDocument();
    const scoreElement = screen.getByText('Wins: 42');
    expect(scoreElement).toBeInTheDocument();
    const diceElement = screen.getByText('5');
    expect(diceElement).toBeInTheDocument();
});

