const name = "Lucas Rei Panni"

let firstname = name.substring(name[0], name.indexOf(" "));
let middlename = name.substring(name.indexOf(" ") +1, name.lastIndexOf(" "));
let lastname = name.substring(name.lastIndexOf(" ")+1);


console.log(firstname);
console.log(middlename);
console.log(lastname);
