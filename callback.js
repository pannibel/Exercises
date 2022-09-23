"use strict";

//
const person3 = {
    firstName: "Harry",
    lastName: "Potter",
    hired: false
}

const person4 = {
    firstName: "Ron",
    lastName: "Weasley",
    hired: false
}

function hire(person) {
    person.hired = true
}

function fire(person) {
    person.hired = false
}

function fireOrHire(action, person) {
    action(person)
}

fireOrHire(hire, person3);
fireOrHire(fire, person4);
console.log(person3);
console.log(person4);