import React from 'react';
import {render, screen} from '@testing-library/react';
import {DicePanel} from "./DicePanel";
import {DiceValue} from "./Dice";

it('should display default display', () => {
    render(<DicePanel player={ {name: 'player 1', wins: 0}}/>);

    const nameElement = screen.getByText('player 1');
    expect(nameElement).toBeInTheDocument();
    const scoreElement = screen.getByText('Wins: 0');
    expect(scoreElement).toBeInTheDocument();
});

it('should display custom display', () => {
    render(<DicePanel player={ {name: 'player 1', diceValue:DiceValue.FIVE, wins:42}} />);

    const nameElement = screen.getByText('player 1');
    expect(nameElement).toBeInTheDocument();
    const scoreElement = screen.getByText('Wins: 42');
    expect(scoreElement).toBeInTheDocument();
    const diceElement = screen.getByText('5');
    expect(diceElement).toBeInTheDocument();
});

