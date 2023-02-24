import capitalize from '../src/capitalize';

test('Takes a string and returns it with the first character capitalized', () => {
    expect(capitalize.getString('test')).toEqual('Test');
});

test('Takes a string and returns it with the first character capitalized', () => {
    expect(capitalize.getString('capitalize-me')).toEqual('Capitalize-me');
});

test('Takes a string and returns it with the first character capitalized', () => {
    expect(capitalize.getString('space space ...')).toEqual('Space space ...');
});

test('Takes a string and returns it with the first character capitalized', () => {
    expect(capitalize.getString('nEXT')).toEqual('NEXT');
});

test('Takes a number and return error', () => {
    expect(capitalize.getString(2)).toEqual('Type error, not a string');
});
