const reverseString = (() => {
    const getString = (str) => {
        if (typeof str !== 'string') {
            return 'Type error, not a string';
        } else {
            return str.split('').reverse().join('');
        }
    };

    return { getString };
})();

export default reverseString;
