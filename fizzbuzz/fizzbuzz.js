/* 
Write code that will go through each number from 1 to 100 and:

For each number that is a multiple of 3, print "Fizz"
For each number that is a multiple of 5, print "Buzz"
For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
All other numbers should just print normally
*/

function fizzBuzz(n) {
    // iterate thur 1 to 100
    for (var i = 1; i <= n; i++) {
        // check the number if divided 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            // check divided only 5
        } else if (i % 5 === 0) {
            console.log("Buzz");
            // check divided 3
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            // the rest just print #
            console.log(i);
        }
    }
}
fizzBuzz(100);