var like = document.querySelector(".set-like > p")
var count = parseInt(document.querySelector(".set-like > p").innerText[0]);

console.log(like);

function likeIncrease() {
    count += 1;
    like.innerText = count + " like(s)";
}