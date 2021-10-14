function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}

function example(e) {
    console.log("element clicked", e);
}

function turnOff(e) { // event's innerText
    e.innerText = "off";
}

function hide(e) { // event remove
    e.remove();
}