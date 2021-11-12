var user = "itswcl";

function handleChange(ele) {
    user = ele.value;
    console.log(user);
}

async function getCoderData() {
    // fetch the github info from github api
    var response = await fetch("https://api.github.com/users/" + user);
    // turn data to object using "json()"
    var coderData = await response.json();
    // have the info and display to HTML
    var name = document.querySelector("#name");
    name.innerText = coderData.name;
}

// getCoderData();

// async function getCoderData() {
//     // fetch the github info from github api
//     var response = await fetch(`api.openweathermap.org/data/2.5/weather?q=sunnyvale&appid=d20a9468d2aa6b0af31f42ed827fe6df
//     `);
//     // turn data to object using "json()"
//     var coderData = await response.json();

// }
