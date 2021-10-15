/*
High Pass Filter
Given an array and a value cutoff, return a new array containing
only the values larger than cutoff.
*/

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    // iterate the array
    for (var i = 0; i < arr.length; i++) {
        // if value greater than cutoff
        if (arr[i] > cutoff) {
            // store to filtered
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
