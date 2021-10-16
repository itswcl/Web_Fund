// var like = document.querySelector(".set-like > p")
// var count = parseInt(document.querySelector(".set-like > p").innerText[0]);

// function likeIncrease() {
//     count += 1;
//     like.innerText = count + " like(s)";
// }

// array to hold each card's likes
var likeCards = document.querySelectorAll(".set-like > p");
// to get each like count
var likeCount0 = parseInt(likeCards[0].innerText.split(' ')[0])
var likeCount1 = parseInt(likeCards[1].innerText.split(' ')[0])
var likeCount2 = parseInt(likeCards[2].innerText.split(' ')[0])

function likeIncrease(e) {
    // check if btn2 click
    if (e.classList.value === "btn2") {
        // adding 1 to btn2
        likeCount2 += 1;
        // update the text in btn2 with likes
        likeCards[2].innerText = likeCount2 + " like(s)"
    // check if btn1 click
    } else if (e.classList.value === "btn1") {
        // adding 1 to btn1
        likeCount1 += 1;
        // update the text in btn1 with likes
        likeCards[1].innerText = likeCount1 + " like(s)"
    // if btn0 click
    } else if (e.classList.value === "btn0") {
        // add 1 to btn0
        likeCount0 += 1;
        // update text in btn0 with likes
        likeCards[0].innerText = likeCount0 + " like(s)"
    }
}