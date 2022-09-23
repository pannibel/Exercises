/* const name = "Lucas Rei Panni"

let firstname = name.substring(name[0], name.indexOf(" "));
let middlename = name.substring(name.indexOf(" ") +1, name.lastIndexOf(" "));
let lastname = name.substring(name.lastIndexOf(" ")+1);


console.log(firstname);
console.log(middlename);
console.log(lastname);

//
function fullName(lastName, firstName, middleName) {
    if (middleName) {console.log(firstName, middleName, lastName)}
    else if (!middleName) {console.log(firstName, lastName)}
}

fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
fullName("Harry", "Pooter");
fullName("Potter", "Harry", "James", "POttypot") */

//

/* const person = "Lucas Panni Rei"
let lastName = person.substring(person.lastIndexOf(" ")+1);
let firstName = person.substring(person[0], person.indexOf(" "));
let middleName = person.substring(person.indexOf(" ") +1, person.lastIndexOf(" "));

const full = fullname(lastName, firstName, middleName);

function fullname(lastName, firstName, middleName) {
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}

console.log(full) */

//

const fullName = "lucas Ranni";
let nameArray;
const nameParts = getNameParts(fullName);

function getNameParts(fullName) {
    let firstName = fullName.substring([0], fullName.indexOf(" "));
    let middleName = fullName.substring(fullName.indexOf(" ")+1, fullName.lastIndexOf(" "));
    let lastName = fullName.substring(fullName.lastIndexOf(" ")+1);

    firstName = firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
    middleName = middleName[0].toUpperCase() + middleName.substring(1).toLowerCase();
    lastName = lastName[0].toUpperCase() + lastName.substring(1).toLowerCase();

if (middleName) {
        nameArray = `{
        first name: ${firstName},
        middle name: ${middleName},
        last name: ${lastName}}`;
} else {
    nameArray = `{
        first name: ${firstName},
        last name: ${lastName}}`;
}

    return nameArray;
}

console.log(nameParts)