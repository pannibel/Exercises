"use strict"
let newname;

function capitalize(name) {
    newname = name[0].toUpperCase() + name.substring(1).toLowerCase();
    console.log(newname)
}

capitalize("anastasia");
capitalize("gareth");

