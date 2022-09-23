"use strict";
// the output of this is 1,3,6,4,2,5
//*FETCH */
/* const url = "cars.json";
start();
function start() {
  console.log("1");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("2");
      prepareData();
    });
  console.log("3");
  useData();
  console.log("4");
}
function prepareData() {
  console.log("5");
}
function useData() {
  console.log("6");
} */

//**ASYNC */
//The output of this is : 1,3,2,6,4,5
const studentURL = "https://petlatkea.dk/2021/hogwarts/students.json";
const familiesURL = "https://petlatkea.dk/2021/hogwarts/families.json";

let studentJSON;
let familiesJSON;
let comparison;
let view = document.querySelector("#view");

/* const studentURL = "cars.json";
const familiesURL = "users.json"; */

async function start() {
  await loadFamilyJSON();
  await loadStudentJSON();
  prepareData();
}

async function loadStudentJSON() {
  const resp = await fetch(studentURL);
  const data = await resp.json();
  console.log("4");
  studentJSON = data;
  //prepareData();
}

async function loadFamilyJSON() {
  const resp = await fetch(familiesURL);
  const data = await resp.json();
  console.log("Families JSON loaded");
  familiesJSON = data;

  //prepareData();
}

function prepareData() {
  if (studentJSON.length > familiesJSON.length) {
    comparison = "There are more students than families";
  } else {
    comparison = "There are more students than families";
  }
  useData();
}

function useData() {
  view.textContent = comparison;
}

window.addEventListener("DOMContentLoaded", start);
