
var tempData = document.querySelectorAll(".data");

function updateCity(e) {
    document.querySelector('.sub-nav > h1').innerText = e.innerText;
    alert('Loading weather report...')
}

function hide() {
    document.querySelector("#cookie").remove();
}

function tempSwitch(e) {
    if (e.value === "F") {
        for (var i = 0; i < tempData.length; i++) {
            // (c * 9 / 5) + 32;
            var temp = parseInt(tempData[i].innerText);
            tempData[i].innerText = ((temp * 9 / 5) + 32).toFixed(0) + "°";
        }
    } else if (e.value === "C") {
        for (var i = 0; i < tempData.length; i++) {
            // (f - 32) * 5 / 9
            var temp = parseInt(tempData[i].innerText);
            tempData[i].innerText = ((temp - 32) * 5 / 9).toFixed(0) + "°";
        }
    }
}