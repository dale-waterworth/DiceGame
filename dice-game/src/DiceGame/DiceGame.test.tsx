import {fireEvent, render, screen} from "@testing-library/react";
import {DiceGame} from "./DiceGame";
import React from "react";

describe('when playing the dice game', () => {

    it('should display both players and button', () => {
        render(<DiceGame/>);

        expect(screen.getAllByText(/wins:/i).length).toBe(2);
        expect(screen.getByRole('button', {name: /spin/i})).toBeInTheDocument();
    });


    it('should call to roll dice when user clicks spin button', () => {
        /*
            This doesn't work.
            I'd need to spend more time to figure out a nicer way to check the dispatch function is called.
            Note: the reducer has its own tests.
            Dependency injection would solve the issue and allow it to be mocked
         */

        const clickDispatch = jest.fn();

        render(<DiceGame/>);

        fireEvent.click(screen.getByRole('button', {name: /spin/i}));

        expect(clickDispatch).toHaveBeenCalledWith({action: 'spin'});
    })
})
