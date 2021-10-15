/*
Better than average
Given an array of numbers return a count of how many of the numbers are larger than the average.
*/
function betterThanAverage(arr) {
    var sum = 0
    // calculate the average
    var avg;
    // count how many values are greater than the average
    var count = 0
    // iterate the number
    for (var i = 0; i < arr.length; i++) {
        // store in sum
        sum += arr[i];
    }
    // give average number
    avg = sum / arr.length;
    // iterate the number
    for (var i = 0; i < arr.length; i++) {
        // check if bigger than avg
        if (arr[i] > avg) {
            // if so count +1
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
