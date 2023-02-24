const capitalize = (() => {
    const getString = (str) => {
        if (typeof str !== 'string') {
            return 'Type error, no a string';
        } else {
            return str.charAt(0).toUpperCase;
        }
    };

    return { getString };
})();

export default capitalize;
