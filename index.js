// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(string) {
    cats.push("Ralph");
}

function destructivelyPrependCat(string) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(string) {
    return cats.concat("Broom");
}

function prependCat(string) {
    return ["Arnold"].concat(cats);
}


function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}
