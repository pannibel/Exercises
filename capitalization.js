/* const name = "petra"
const capitalize = name.substring(0, 1).toUpperCase();
const lowercase = name.substring(1).toLowerCase();

console.log(capitalize+lowercase) */

//

const person = "pEtEr"
const cap = capitalize(person);

function capitalize(person) {
    return `${person[0].toUpperCase()+person.substring(1).toLowerCase()}`;
}

console.log(cap)
