function efficientSearch(array, item) {
    let minIndex = 0;                       // 1
    let maxIndex = array.length - 1;        // 4
    let currentIndex;                       // 1
    let currentElement;                     // 1
    let steps = 1; // for tracking number of operations

    while (minIndex <= maxIndex) {          // O(n)
        currentIndex = Math.floor((minIndex + maxIndex) / 2);   // O(log n)
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


// T = (1 + 2 + 4) + 
// T = O(log n)




/*

Time Complexity Analysis approach:
1. Number of expressions, line-by-line, considered in isolation from other lines of code.
2. Math expression, simplify it
3. Replace numbers for constants (and constants are just 1)
4. Identify the fastest growing term, typically some form of `n`
5. Remove the constants from the fastest growing term
6. Express this in Big O notation



*/


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