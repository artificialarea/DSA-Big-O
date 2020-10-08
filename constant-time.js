function getRandomItem(array) {
    // to measure the number of operations done by the algorithm
    let ticks = 0;  
    // get a random number and access that element in the array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks++;
    return {result: item, ticks};
}

let arr1 = [1,2,3];
let arr2 = arrGenerator(10);
let arr3 = arrGenerator(100);

function arrGenerator(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(getRandomItem(arr1));
console.log(getRandomItem(arr2));
console.log(getRandomItem(arr3));
