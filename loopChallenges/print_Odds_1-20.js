/*
1 Print odds 1-20
Using a loop write code that will console.log all of the odd values from 1 up to 20.
*/

function printOdds(n) {
    // iterate thru n numbers
    for (var i = 1; i <= n; i++) {
        // check if number is odd by modulo 1
        if (i % 2 === 1) {
            // true then print out the number
            console.log(i);
        }
    }
}
printOdds(20);