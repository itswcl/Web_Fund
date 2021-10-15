// event to check if text as Login or Logout
function log(e) {
    if (e.innerText === "Login") {
        e.innerText = "Logout"
    } else {
        e.innerText = "Login"
    }
}

// e as event and remove function
function hide(e) {
    e.remove();
}