import fetch from 'cross-fetch';

async function userData() {
    var response = await fetch("https://api.github.com/users/dev-marisa")
    var user = await response.json();

    console.log(user);
}

userData();