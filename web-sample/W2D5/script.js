var theDojo = [];

var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i < 10; i++) {
        theDojo.push([]);
            for(var j=0; j < 10; j++) {
                theDojo[i].push(1);
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
return result;
}

// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {

    console.log({i, j, element});
    // alert("TODO - determine how many ninjas are hiding in adjacent squares");

    // var topLeft = theDojo[i-1][j-1]; var topCenter = theDojo[i-1][j-0]; var topRight = theDojo[i-1][j+1];
    // var centerLeft = theDojo[i-0][j-1]; var centerRight = theDojo[i-0][j+1];
    // var bottomLeft = theDojo[i+1][j-1]; var bottomCenter = theDojo[i+1][j-0]; var bottomRight = theDojo[i+1][j+1];

    // temp to store the total
    var sum = 0;
        // i = 3, j = 5
    // iterate the first layer of dojo using index a 3 times
    for (var a = -1; a <= 1; a++) {
        // iterate the second layer of dojo using index b 3 times
        for (var b = -1; b <= 1; b++) {
            // each time we check if we NOT face undefined
            if (theDojo[i-a] !== undefined && theDojo[j-b] !== undefined) {
                // add the total
                sum +=theDojo[i - a][j-b]
            }
        }
    }

    // return the result subtract the middle of ninjas
    element.innerText = sum - theDojo[i][j];
    // sum up the total ninja around the square clicked
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div>
dojoDiv.innerHTML = render(theDojo);
