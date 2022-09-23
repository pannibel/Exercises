"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];
people.sort();

console.log(people);

// comparing animals

const animals = [
    {name: "Mandu", type: "cat"},
    {name: "ScoobyDoo", type: "dog"},
    {name: "Toothless", type: "dragon"},
    {name: "Leeloo", type: "cat"},
    {name: "Freddie", type: "dog"},
    {name: "Mia", type: "cat"},
];

function compareName(a, b) {
    if (a.name < b.name) {
        return -1
    } else if (a.name > b.name) {
        return 1
    }
};

animals.sort(compareName);
console.log(animals);