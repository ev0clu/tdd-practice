import calculator from '../src/calculator';

test('Adding 0 and 0', () => {
    expect(calculator.add(0, 0)).toEqual(0);
});

test('Adding -4 and 2', () => {
    expect(calculator.add(-4, 2)).toEqual(-2);
});

test('Adding 2 and -9', () => {
    expect(calculator.add(2, -9)).toEqual(-7);
});

test('Adding -3 and -2', () => {
    expect(calculator.add(-3, -2)).toEqual(-5);
});

test('Adding floating point numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});
