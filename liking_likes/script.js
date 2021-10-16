var like = document.querySelector(".top > p")
var count = 0;

console.log(like);

function likeIncrease() {
    count += 1;
    like.innerText = count + " like(s)";
}