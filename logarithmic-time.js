// Same same, but different, CS50 Phone Book demo: https://www.youtube.com/watch?v=DSffdCT5Cx4

// Every time you double n, the runtime only increases one step. 
// e.g. 1 item take 1 second, 10 items take 2 seconds, 100 items take 3 seconds. 

// Conversely, it is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.

function howManyLessThanNitems(arr, n) {
    let ticks = 0;
    /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
    if (!arr.length || arr[0] >= n) {
        ticks++;
        return 0;
    }

    let lowIndex = 0, highIndex = arr.length;

    while (highIndex > lowIndex) {
        // Find midpoint
        let midIndex = Math.floor((highIndex + lowIndex) / 2);
        /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
        if (arr[midIndex] >= n) {
            highIndex = midIndex;
            // console.log('highIndex (midIndex): ', highIndex);
            ticks++;
        }

        /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
        else if (arr[midIndex + 1] < n) {
            lowIndex = midIndex;
            // console.log('lowIndex (midIndex): ', lowIndex);
            ticks++;
        }

        /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
        else {
            ticks++;
            // console.log('result: ', midIndex + 1);
            return {
                result: midIndex + 1,
                ticks: ticks
            }
        }
    }
}

console.log(howManyLessThanNitems([8,9,10], 2));
console.log(howManyLessThanNitems([1,2,3], 2));
console.log(howManyLessThanNitems(arrGenerator(100), 2));
console.log(howManyLessThanNitems(arrGenerator(1000), 2));

function arrGenerator(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
