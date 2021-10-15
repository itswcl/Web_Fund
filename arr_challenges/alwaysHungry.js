/*
Always Hungry
Write a function that is given an array and each time the 
value is "food" it should console log "yummy". If "food" 
was not present in the array console log "I'm hungry" once.
*/
function alwaysHungry(arr) {
    // your code here 
    // check if we have food in the array
    if (arr.indexOf("food") !== -1) {
        // yes then return yummy
        console.log("yummy, yummy") 
    } else {
        // no we return hungry
        console.log("I'm hungry") 
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
