function findMin(array){
    let min = array[0], ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++;
        if (array[i] < min) {
            min = array[i];
        }
    }
    return {
        result: min,
        ticks: ticks
    };
}

console.log(findMin([1,2,3]));
console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMin(arrGenerator(100)));

function arrGenerator(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
