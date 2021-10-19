var cardsDiv = document.querySelector("#cards");
var userName = "";

function getUserName(element) {
    console.log(element.value)
    userName = element.value;
}

function makeCoderCard(data) {
    var res = `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div>
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;

}

async function search() {
    // async need await
    var response = await fetch(`https://api.github.com/users/${userName}`) 
    var userData = await response.json();

    console.log(userData);
    cardsDiv.innerHTML = makeCoderCard(userData) + cardsDiv.innerHTML;
}