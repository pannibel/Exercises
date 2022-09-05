"use strict"

let r;
let g;
let b;

function colorConvert(cssString) {
    cssString = cssString.slice(4, -1);
    cssString = cssString.split(", ");

    r = cssString[0];
    g = cssString[1];
    b = cssString[2];

    console.log(r, g, b)
}

colorConvert("rgb(192, 13, 1)");