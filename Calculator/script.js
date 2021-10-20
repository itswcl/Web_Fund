var result = [];
var tempRes = [];

function press(n) {
    appendNumber(n);
    displayNumber(n);
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
        result = [finalAns];
        tempRes = [];
}

function clr() {
    result = [];
    tempRes = [];
    document.querySelector("#display").innerText = 0;
}

function appendNumber(n) {
    if (document.querySelector("#display").innerText.length < 9 && typeof n === 'number') {
        if (n > 0) {
            result.push(n);
        } else if (n === 0 && result[0] !== undefined) {
            result.push(n);
        } else if (n === '.' && result[0] !== undefined && result.indexOf('.') === -1) {
            result.push(n);
        }
    }
}

function displayNumber(n) {
    var display = document.querySelector("#display")
    if (result.length === 0) {
        display.innerText = 0;
    } else if (result.includes("+") || result.includes("-") || result.includes("*") || result.includes("/")) {
        if (tempRes[0].length < 9) {
    
            tempRes[tempRes.length - 1].push(n);
            display.innerText = tempRes[tempRes.length - 1].join("");
        }
    }   else {
        display.innerText = result.join("");
    } 
}