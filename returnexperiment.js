"use strict"

//1.
const message = greeting("Anna");

function greeting(firstName) {
    return `Hello ${firstName}`;
}
console.log(message);


//2.
const message2 = greeting("any name");
console.log(message2);
console.log(greeting("any name"));

const message3 = greeting();
console.log(message3);

const txt = `Greeting is ${greeting("a name")}`;
console.log(txt);

