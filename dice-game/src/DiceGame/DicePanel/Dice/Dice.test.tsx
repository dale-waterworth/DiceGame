import React from 'react';
import {render, screen} from '@testing-library/react';
import {Dice, DiceValue} from "./Dice";

it('should display default dice display', () => {
    render(<Dice/>);
    const linkElement = screen.getByText(DiceValue.ONE);
    expect(linkElement).toBeInTheDocument();
});

it('should display the value when passed via a props', () => {
    render(<Dice side={DiceValue.FIVE}/>);
    const linkElement = screen.getByText(DiceValue.FIVE);
    expect(linkElement).toBeInTheDocument();
});
