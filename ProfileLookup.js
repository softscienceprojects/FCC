//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  //Loop through your contacts array
for (var i = 0; i<contacts.length; i++) {
  // check if the firstName property is the same as 'name'
  if (contacts[i].firstName === name) {
    // assumed true, nested if to check if the contacts hasOwnProperty - the same as prop, is false. 
    if (contacts[i].hasOwnProperty(prop) === false) {
      // return no such property, as it DOES have the name but DOES NOT have the prop
      return "No such property"
    }  // otherwise, return the contacts array's prop
    return contacts[i][prop];
  }
} // or no contact, return no such contact
return "No such contact";
}

// Change these values to test your function
// lookUpProfile("Sherlock", "address");
