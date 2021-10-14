/*
2 Decreasing Multiples of 3
Using a loop write code that will console.log all of the values that are evenly divisible 
by 3 from 100 down to 0.
*/
function deMulBy3(n) {
    // iterate from n to 0
    for (var i = n; i >= 0; i--){
        // check if number module 3 is zero
        if (i % 3 === 0) {
            // log the number
            console.log(i);
        }
    }
}

deMulBy3(100);