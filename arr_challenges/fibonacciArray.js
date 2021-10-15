/*
Fibonacci Array
Fibonacci numbers have been studied for years and appear often in nature.
Write a function that will return an array of Fibonacci numbers up to a 
given length n. Fibonacci numbers are calculated by adding the last two 
values in the sequence together. So if the 4th value is 2 and the 5th value 
is 3 then the next value in the sequence is 5.
*/
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    // iterate til we hit giving n and - 2 since index 0 and 1 giving
    for (var i = 0; i < n - 2 ; i++) {
        // create the next index of fibArr and giving the add up number index i and i+1 value ahead of next index
        fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
