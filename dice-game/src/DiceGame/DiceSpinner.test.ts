import {DiceSpinner} from "./DiceSpinner";

describe('when spinning the dice', () => {
   it('should return back a number', () =>{
       const diceValue = DiceSpinner();

       expect( typeof diceValue === 'number').toBeTruthy()
   });

   it('should not be greater than 7', () =>{
       for(let i = 0; i < 1000; i++){
           const diceValue = DiceSpinner();

           expect(diceValue < 7).toBeTruthy()
       }
   })
});
