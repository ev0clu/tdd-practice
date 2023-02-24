import calculator from '../src/calculator';

// Add
test('Adding 0 and 0', () => {
    expect(calculator.add(0, 0)).toEqual(0);
});

test('Adding -4 and 2', () => {
    expect(calculator.add(-4, 2)).toBe(-2);
});

test('Adding 2 and -9', () => {
    expect(calculator.add(2, -9)).toBe(-7);
});

test('Adding -3 and -2', () => {
    expect(calculator.add(-3, -2)).toBe(-5);
});

test('Adding floating point numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// Subtract
test('Subtract 0 and 0', () => {
    expect(calculator.subtract(0, 0)).toBe(0);
});

test('Subtract -1 and 0', () => {
    expect(calculator.subtract(-1, 0)).toBe(-1);
});

test('Subtract -3 and -8', () => {
    expect(calculator.subtract(-3, -8)).toBe(5);
});

test('Subtract 5 and 1', () => {
    expect(calculator.subtract(5, 1)).toBe(4);
});

// Divide
test('Divide 5 and 1', () => {
    expect(calculator.divide(5, 1)).toBe(5);
});

test('Divide 0 and 3', () => {
    expect(calculator.divide(0, 3)).toBe(0);
});

test('Divide -1 and 0', () => {
    expect(calculator.divide(-1, 0)).toEqual('Cannot divide by zero');
});

test('Divide -2 and -6', () => {
    expect(calculator.divide(-2, -6)).toBeCloseTo(0.3333);
});

// Multiply
test('Multiply -2 and -6', () => {
    expect(calculator.multiply(-2, -6)).toBeCloseTo(12);
});

test('Multiply -2 and 0', () => {
    expect(calculator.multiply(-2, -0)).toBeCloseTo(0);
});

test('Multiply 4 and -2', () => {
    expect(calculator.multiply(4, -2)).toBeCloseTo(-8);
});
