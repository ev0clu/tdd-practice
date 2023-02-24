const capitalize = (() => {
    const getString = (str) => {
        if (typeof str !== 'string') {
            return 'Type error, not a string';
        } else {
            const newChar = str.charAt(0).toUpperCase();
            return str.replace(str.charAt(0), newChar);
        }
    };

    return { getString };
})();

export default capitalize;
