function hasDuplicates(array) {
    let ticks = 0, result = false;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        for (let j = 0; j < array.length; j++) {
            ticks++;
            if (array[i] === array[j] && i !== j) {
                result = true;
            }
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

console.log(hasDuplicates([1, 2, 2]));
console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
console.log(hasDuplicates([...arrGenerator(100), 99]));

function arrGenerator(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}