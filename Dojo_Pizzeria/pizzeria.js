/* 
The Pizza Oven
Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza,
but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

Create a function called pizzaOven that returns a JavaScript (Pizza) Object

Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

Create 2 more pizzas with any toppings we like!

Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

*/
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings,
    };
}
console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]))
console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))
console.log(pizzaOven("deep dish", "normal", ["america"], ["pepperoni", "pineapple"]))
console.log(pizzaOven("hand tossed", "marinara", ["feta"], ["basil", "mushrooms", "onions"]))

var pizza = {
    crustType: ["deep dish", "hand tossed"],
    sauceType: ["traditional", "marinara", "normal"],
    cheeses: ["mozzarella", "feta", "america"],
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions", "pineapple", "basil"],
}

function randomPizza() {
    // set a random collection for pizza
    var pizzaRandom = {
        crustType: pizza.crustType[Math.floor(Math.random() * 1)],
        sauceType: pizza.sauceType[Math.floor(Math.random() * 2)],
        cheeses: [],
        toppings: [],
    }
    // random pick how many cheese and topping
    var cheesesCount = Math.floor(Math.random() * 3)
    var toppingsCount = Math.floor(Math.random() * 7)

    // iterate thru how many cheese we want
    for (var i = 0; i <= cheesesCount; i++) {
        // check if we picked already 
        if (pizzaRandom.cheeses.indexOf(pizza.cheeses[i]) === -1) {
            // if not we adding it
            pizzaRandom.cheeses.push(pizza.cheeses[i]);
        }
    }
    // iterate thru how many topping we want
    for (var i = 0; i <= toppingsCount; i++) {
        // check if added already
        if (pizzaRandom.toppings.indexOf(pizza.toppings[i]) === -1) {
            // adding the topping
            pizzaRandom.toppings.push(pizza.toppings[i]);
        }
    }
    // result of random pizza
    return pizzaRandom;
}
console.log(randomPizza());