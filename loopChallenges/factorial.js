/*
5 Factorial
Write code that will multiply all of the values from 1-12 onto some variable product and at the end 
console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
*/

function factorial(start, end) {
    // product to add up needs to be 1 in order to multiple
    var product = 1;
    // iterate numbers from start to end
    for (var i = start; i <= end; i++) {
        // each iteration we multiple the product with next number
        product *= i;
    }
    // log the product
    console.log(product);
}

factorial(1, 12);