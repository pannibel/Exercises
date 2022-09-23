"use strict";

let yearLeaps;
let year = 1600;

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                yearLeaps = true;
            } else {
                yearLeaps = false;
            }
        } else {
            yearLeaps = true;
        }
    } else {
        yearLeaps = false;
    }

    console.log(yearLeaps);
}

isLeapYear(year);