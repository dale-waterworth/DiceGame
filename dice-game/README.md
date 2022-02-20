# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements
Node >= v16

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Details
#### Directory structure
The feature directory structure has been used over individual folders for components, hooks, routes etc.
I have worked with different flavours but find this the easiest to find and group things.

#### Code
Written in Typescript.

Used a reducer for the logic

Didn't really require Redux or context but could easily add it with the reducer

Favour functional components but equally like class components.

interfaces or types? used both but interfaces can change and can be used to extend if required

used a types.d.ts to house the types and interfaces

#### Testing
Used TDD - react testing library and jest

Not added integration or e2e tests. Generally used jest and Cypress

#### TODO (Given more time)

add animation - not enough time to add and haven't done much other than css transitions

Find a better way to unit test the reducer - use DI?

improve the styling - focussed more on the code / functionality than the look

Maybe use a styled component for the dice

Improve setting the dice icon and passing in the value.

I've left the dice value in as the tests would need to be updated to test the correct icon

![Image of Game](https://github.com/dale-waterworth/DiceGame/blob/master/dice-game/docs/img.png)
