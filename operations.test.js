// "import" the sum function from operations.js
const {sum} = require('./operations')

//TODO: uncomment the next line (Done)
const {subtract} = require('./operations')

test('subtracts 3 - 1 to equal 2', () => {
    expect(subtract(3, 1)).toBe(2)
});

test('subtracts 3 - 7 to equal -4', () => {
    expect(subtract(3, 7)).toBe(-4)
});

test('subtracts 0 - (-5) to equal 5', () => {
    expect(subtract(0, -5)).toBe(5)
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('adds 0 + 4 to equal 4', () => {
    expect(sum(0, 4)).toBe(4)
});

test('adds -1 + (-7) to equal -8', () => {
    expect(sum(-1, -7)).toBe(-8)
});
