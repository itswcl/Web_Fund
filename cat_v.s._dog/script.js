var animalImg = document.querySelector("#animal")

function pickCat(element) {
    // console.log(element.style)
    // element.style.backgroundColor = "goldenrod";
    element.remove();
    animalImg.src="cat.jpg"
}

function pickDog(element) {
    element.classList.add("btn")
    animalImg.src="dog.jpg"
}