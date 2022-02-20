import {render, screen} from "@testing-library/react";
import {DiceGame} from "./DiceGame";

describe('when playing the dice game', () =>{
    it('should roll the dice when user clicks', () =>{
        render(<DiceGame/>);
        const button = screen.getByText('Spin');

        button.click();

        // todo figure out how to mock reducer
        //expect()

    })
})
