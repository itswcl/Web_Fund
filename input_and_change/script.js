var nameSpan = document.querySelector('#name');
var foodToOrder = "";

function setName(element) {
    nameSpan.innerText = element.value;
}

function pickFood(element) {
    foodToOrder = element.value;
}

function order() {
    alert("ordering a " + foodToOrder);
}