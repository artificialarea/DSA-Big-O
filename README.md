# Big-Oh exercises

Pair: Jerrad + Sacha

Data Structures & Algorithms, per: https://courses.thinkful.com/dsa-v1/checkpoint/3#assignment

Big-O Cheet Sheet: https://tf-assets-prod.s3.amazonaws.com/tf-curric/data-science/Thinksheet-BigO.pdf

To run any of these scripts, in terminal command line enter: `node script-name.js`


## 1. What is the Big O for this?

**v1.** **O(1). Constant time.** Performing a `.find()` operation. It requires one action to get a result, regardless of the size of the input (the number of people).

**v2.** **O(n). Linear time.** Performing a `for` loop operation. As the number of people increases, the steps increase at the same rate.


## 2. Even or odd

**O(1). Constant time** because the number of operations doesn't change based on the input


## 3. Are you here?

**O(n^2). Polynomial time complexity.** Because it's a nested `for` loop. For each `n` element in `arr1` we have to perform `k` operations in `arr2`. 


## 4. Doubler

**O(n). Linear time.** We perform one operation per element in the array, so our operations grow at the same rate as the input.


## 5. Naive search

**O(n). Linear time.** Same same. As array grows, number of operations grow in parallel. It's a `for` loop, innit.


## 6. Creating pairs

**O(n^2). Polynomial time.** For each `n` element in `i` we have to perform another (`k` operation) in `j`. 


## 7. Compute the sequence

**O(n). Linear time.** It's printing out a custom sequence of specific numbers... looking at the numbers -- we console.log'd it -- it appears to be the fibonacci sequence. You take everything inside and you boil it down to what is growning fastest... the `n` of the `for` loop. 

## 8. An efficient search

**O(log n). Logarithmic time.** Every iteration of the operation of search cuts the array in half, which is a characteristic of logarithmic algorithms. Conversely, every time you double `n`, the runtime only increases by one step.


<br />

<hr />


## Computational Complexity script examples

Aside: [Big-O Classifications chart](https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/big-o-notation-table-for-interviews.pdf)

Chart: the different runtime complexities with relation to their input sizes...
![Big-O](./big_o.png)


Table: the number of operations required by different time complexities with inputs of size 10, 100, and 1000...
| Big-O Notation | n = 10 | n = 100 | n = 1000 |
| -------------- | ------ | ------- | -------- |
|O(1)            | 1      |	1	    | 1        |
|O(log n)        | 3	  | 6	    | 9        |
|O(n)	         | 10	  | 100     | 1000     |
|O(n^2)	         | 100	  | 10000	| 1000000  |
|O(2^n)	         | 1024	  | 2^100	| 2^1000   |


<br />

**O(1)** **`constant-time.js`** 
Constant time complexity is the "holy grail". No matter the size of your input, the algorithm will take the same amount of time to complete.

**O(log n)** **`logarithmic-time.js`** 
Time increases with size of data, but not proportionately so (like linear time). Every time you double `n`, the runtime only increases one step. Conversely, it is also characteristic of logarithmic algorithms that they cut the problem size in half each round through. Same same but different, [CS50 Phone Book demo](https://www.youtube.com/watch?v=DSffdCT5Cx4) 

**O(n)** **`linear-time-sum.js`** / **`linear-time-find.js`**
Algorithms with linear time complexity have running times that are directly proportional to the size (n) of the input. 

**O(n^k)** **`polynomial-time.js`**
An algorithm with polynomial time complexity has a running time that would be some input size `n` raised to some constant power `k`. The easiest way to understand polynomial time complexity is with nested loops.

**O(2^n)** **`exponential-time.js`**
No clue what the purpose of the function is for, even after it's explained to me. haha.