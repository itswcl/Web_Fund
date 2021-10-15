/*
Array Reverse
Write a function that will reverse the values an array and return them.
*/
function reverse(arr) {
    // your code here
    // iterate thur half of arr
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        // store a old value of front index
        var temp = arr[i];
        // update the value of front index
        arr[i] = arr[arr.length - 1 - i];
        // update the value of back index with temp value
        arr[arr.length - 1 - i] = temp;
    }
    // result
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
