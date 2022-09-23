const studentURL = "https://petlatkea.dk/2021/hogwarts/students.json";
const familiesURL = "https://petlatkea.dk/2021/hogwarts/families.json";

async function start() {
  console.log("1");
  await loadStudentJSON();
  console.log("2");
  await loadFamilyJSON();
  console.log("3");
  useData();
}

async function loadStudentJSON() {
    const resp = await fetch(studentURL);
    const data = await resp.json();
    console.log("4");
    //prepareData();
}

async function loadFamilyJSON() {
    const resp = await fetch(familiesURL);
    const data = await resp.json();
    console.log("5");
    //prepareData();
}

function prepareData() {
  console.log("6");
}

function useData() {
  console.log("7");
}

start();
