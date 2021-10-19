var result = [];
var tempResult;
var signs = ["+", "-", "/", "*"]

function press(n) {
    if (n > 0) {
        result.push(n);
    } else if (n === 0 && result[0] !== undefined) {
        result.push(n);
    } else if (n === '.' && result[0] !== undefined && result.indexOf('.') === -1) {
        result.push(n);
    } 

    if (result.length === 0) {
        document.querySelector("#display").innerText = 0;
    } else if (signs.indexOf(result[result.length-2]) !== -1) {
    // } else if (result.includes('+') || result.includes('-') || result.includes('/') || result.includes('*') ) {
        document.querySelector("#display").innerText = n;
    }   else {
        document.querySelector("#display").innerText = result.join("");
    } 
    console.log(result);
}

function setOP(sign) {
    if (typeof result[result.length - 1] === 'number') {
        result.push(sign);
    }
    // calculate();
}

function calculate() {
    var finalAns = eval(result.join(''));
    document.querySelector("#display").innerText = finalAns;
    tempResult = finalAns;
    result = [tempResult];
}

function clr() {
    result = [];
    tempResult = 0;
    document.querySelector("#display").innerText = 0;
}