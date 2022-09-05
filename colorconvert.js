"use strict"

let r;
let g;
let b;

// CSS TO RGB
function cssToRGB(cssString) {
    cssString = cssString.slice(4, -1);
    cssString = cssString.split(", ");

    r = parseInt(cssString[0]);
    g = parseInt(cssString[1]);
    b = parseInt(cssString[2]);

    console.log(r, g, b)
}

cssToRGB("rgb(45, 32, 1)");


// HEX TO RGB
function hexToRGB(color) {

    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substrs(5, 2), 16);

    console.log(r, g, b)
}

hexToRGB("#f29c12");


// RGB TO HEX
function colorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function rgbToHex() {
    console.log("#" + colorToHex(r) + colorToHex(g) + colorToHex(b))
}

rgbToHex(255, 100, 200); 
