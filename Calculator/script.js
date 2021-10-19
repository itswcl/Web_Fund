var result = [];
var tempRes = [];
// var signs = ["+", "-", "/", "*"]

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
        // check if there's sign in the array
        // include function 
        // signs.indexOf(result[result.length-2]) !== -1
        } else if (result.includes("+") || result.includes("-") || result.includes("*") || result.includes("/")) {
            tempRes[tempRes.length - 1].push(n);
            document.querySelector("#display").innerText = tempRes[tempRes.length - 1].join("");
        }   else {
            document.querySelector("#display").innerText = result.join("");
        } 
        console.log(result);
        console.log(tempRes);

}

function setOP(sign) {
    if (typeof result[result.length - 1] === 'number') {
        result.push(sign);
    }
    tempRes.push([]);
}

function calculate() {
    var finalAns = eval(result.join(''));
    document.querySelector("#display").innerText = finalAns;
    result = finalAns;
    tempRes = [];
}

function clr() {
    result = [];
    tempRes = [];
    document.querySelector("#display").innerText = 0;
}
