function efficientSearch(array, item) {
    let minIndex = 0;                       // 1
    let maxIndex = array.length - 1;        // 4
    let currentIndex;                       // 1
    let currentElement;                     // 1

    while (minIndex <= maxIndex) {          // n
        currentIndex = Math.floor((minIndex + maxIndex) / 2);   // 2
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}


// T = (1 + 1 + 1 + 1) + n 


let arr = [4, 5];

efficientSearch(arr, itemToFind)


function arrGenerator(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}