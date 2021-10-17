// locate the card of name
var cardName = document.querySelector(".card-name");

function modifyName() {
    // add the name input and name input button 
    cardName.innerHTML = "<input class='nameInput' type='text' name='name' placeholder='FUll NAME'>\
    <input onclick='updateName()'type='button' value='Update'>"
}

function updateName() {
    // locate the text we input based from user
    nameInput = document.querySelector('.nameInput').value;
    // update the text to Name
    cardName.innerText = nameInput;
}

// get all the request card
var requests = document.querySelectorAll('.con-row-request');
// turn the connection count to integer
var connectionCon = parseInt(document.querySelector('.count-connection').innerText);

function removeEle(index) {
    // remove the specific index of tag
    requests[index].remove();
    // decrease the request count
    document.querySelector('.count_active').innerText -= 1;
}

function connectCounts() {
    // add 1 if accept click
    connectionCon += 1;
    // update new connection count
    document.querySelector('.count-connection').innerText = connectionCon;
}