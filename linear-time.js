function sum(array) {
    let sum = 0;
    let ticks = 1;  // to measure the number of operations done by the algorithm

    // `for` loop has a linear relationship, aka O(n)
    // between the length of the input array and the number of operations required for the loop to complete
    for (let i = 0; i < array.length; i++) {
        // although each iteration through the loop 
        // is an example of O(1), aka constant time
        sum += array[i];
        ticks++;
    }
    return {result: sum, ticks};
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

console.log(sum(arr1));
console.log(sum(arr2));
console.log(sum(arr3));
