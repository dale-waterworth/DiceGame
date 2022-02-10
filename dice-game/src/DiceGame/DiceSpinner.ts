export const DiceSpinner = (): number => {
    const randomValue = Math.floor(6 * Math.random()) + 1;
    return randomValue;
}
