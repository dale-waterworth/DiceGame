import React from 'react';
import {render, screen} from '@testing-library/react';
import {Dice, DiceSide} from "./Dice";

it('should display default dice display', () => {
    render(<Dice/>);
    const linkElement = screen.getByText(DiceSide.ONE);
    expect(linkElement).toBeInTheDocument();
});

it('should display the value when passed via a props', () => {
    render(<Dice side={DiceSide.FIVE}/>);
    const linkElement = screen.getByText(DiceSide.FIVE);
    expect(linkElement).toBeInTheDocument();
});
