/*
4 Sigma
Write code that will add all of the values from 1-100 onto some variable sum and at the end console.
log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
*/
function sigma(start, end) {
    // a total var
    var sum = 0;
    // iterate from start to end number
    for (var i = 1; i <= 100; i++) {
        // each iteration we add number to total
        sum += i;
    }
    // console log the result
    console.log(sum);
}

sigma(1, 100)