import {DiceGameReducer} from "./DiceGameReducer";
import {DiceGameStore} from "./types";

jest.mock('./DiceSpinner', () => ({
    __esModule: true,
    DiceSpinner: jest.fn()
}));
import {DiceSpinner} from "./DiceSpinner" ;

const DiceSpinnerMock = DiceSpinner as jest.MockedFunction<typeof DiceSpinner>;


it('should handle a draw', () => {
    const state: DiceGameStore = {
        players: [{
            name: '1',
            wins: 0,
            diceValue: undefined
        }, {
            name: '2',
            wins: 0,
            diceValue: undefined
        }]
    }

    DiceSpinnerMock
        .mockImplementationOnce(() => 1)
        .mockImplementationOnce(() => 1)


    const reducer = DiceGameReducer(state, {action: "spin"})


    expect(reducer.players[0].wins).toBe(0);
    expect(reducer.players[1].wins).toBe(0);
});

it('should add a win for each player', () => {
    const state: DiceGameStore = {
        players: [{
            name: '1',
            wins: 0,
            diceValue: undefined
        }, {
            name: '2',
            wins: 0,
            diceValue: undefined
        }]
    }

    DiceSpinnerMock
        // player 1 win
        .mockImplementationOnce(() => 2)
        .mockImplementationOnce(() => 1)
        // player 2 win
        .mockImplementationOnce(() => 1)
        .mockImplementationOnce(() => 2)


    const round1 = DiceGameReducer(state, {action: "spin"})
    const reducer = DiceGameReducer(round1, {action: "spin"})


    expect(reducer.players[0].wins).toBe(1);
    expect(reducer.players[1].wins).toBe(1);
});
