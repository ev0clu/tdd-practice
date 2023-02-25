const analyzeArray = (() => {
    const analyze = (array) => {
        if (!Array.isArray(array)) return 'Type error, not an array';
        else if (array.length === 0) return 'Empty array';
        else {
            let temp = 0;
            for (let i = 0; i < array.length; i++) {
                temp += array[i];
            }
            const resultAverage = temp / array.length;
            const resultMin = Math.min(...array);
            const resultMax = Math.max(...array);
            const resultLength = array.length;

            const object = {
                average: resultAverage,
                min: resultMin,
                max: resultMax,
                length: resultLength
            };
            return object;
        }
    };

    return { analyze };
})();

export default analyzeArray;
