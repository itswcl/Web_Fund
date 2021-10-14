/*
3 Print the sequence
Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5. // -1.5
*/

function printSeq(start, end) {
    // iterate from start to end number with decrement 1.5
    for (var i = start; i >= end; i-=1.5) {
        // print out each number 
        console.log(i)
    };
}
printSeq(4, -3.5)