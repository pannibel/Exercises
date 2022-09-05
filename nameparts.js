const name = "Lucas Rei Panni"

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
fullName("Potter", "Harry", "James", "POttypot")
