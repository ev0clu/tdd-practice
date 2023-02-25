import analyzeArray from '../src/analyzeArray';

// Average
test('Takes a number or string instead of array and return error', () => {
    expect(analyzeArray.analyze(2)).toEqual('Type error, not an array');
    expect(analyzeArray.analyze(3, 0, -3)).toEqual('Type error, not an array');
    expect(analyzeArray.analyze('2')).toEqual('Type error, not an array');
    expect(analyzeArray.analyze('-2, 9, 0')).toEqual('Type error, not an array');
});

test('Takes an empty array and return Error', () => {
    expect(analyzeArray.analyze([])).toEqual('Empty array');
});

test('Takes a number of array and return average, min, max and length', () => {
    expect(analyzeArray.analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
    expect(analyzeArray.analyze([2, 8])).toEqual({ average: 5, min: 2, max: 8, length: 2 });
    expect(analyzeArray.analyze([3, 0, -3])).toEqual({ average: 0, min: -3, max: 3, length: 3 });
    expect(analyzeArray.analyze([5, 3, 1, 1])).toEqual({ average: 2.5, min: 1, max: 5, length: 4 });
});
