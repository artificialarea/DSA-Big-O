function efficientSearch(array, item) {
    let minIndex = 0;                       // 1
    let maxIndex = array.length - 1;        // 4
    let currentIndex;                       // 1
    let currentElement;                     // 1
    let steps = 1; // for tracking number of operations

    while (minIndex <= maxIndex) {          // n
        currentIndex = Math.floor((minIndex + maxIndex) / 2);   // 2
        currentElement = array[currentIndex];
        steps++;
        
        console.log('currentIndex: ', currentIndex);

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            console.log('number of steps: ', steps)
            return currentIndex;
        }
    }
    return -1;
}


// T = (#) + n + n/2
// T = n + n/2
// T = log n ?


let arr = arrGenerator(1000);
let itemToFind = 105;

console.log(efficientSearch(arr, itemToFind));

function arrGenerator(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}