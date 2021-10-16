var count = 1;
var countEle = document.querySelector("#count");

function add() {
    count += 1;
    countEle.innerText = "The count is " + count;
}

function subtract() {
    count -= 1;
    countEle.innerText = "The count is " + count;
}