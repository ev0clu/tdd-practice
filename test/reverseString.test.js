import reverseString from '../src/reverseString';

test('Takes a string and returns it reversed', () => {
    expect(reverseString.getString('try')).toEqual('yrt');
});

test('Takes a string and returns it reversed with - sign', () => {
    expect(reverseString.getString('reverse-me')).toEqual('em-esrever');
});

test('Takes a capitalized string and returns it reversed', () => {
    expect(reverseString.getString('CapitaLizeD')).toEqual('DeziLatipaC');
});

test('Takes a capitalized,space,dots used string and returns it reversed', () => {
    expect(reverseString.getString('.. tDd')).toEqual('dDt ..');
});

test('Takes a number and return error', () => {
    expect(reverseString.getString(2)).toEqual('Type error, not a string');
});
