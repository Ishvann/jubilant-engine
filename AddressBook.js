var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

var search = function(lastName) {
    contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        } else {
            console.log("Sorry, I do not have that person's contact information.");  
        }
    }
};

var add = function(firstName, lastName, email, phoneNumber) {
    var temp = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        phoneNumber : phoneNumber
    };
    contacts[contacts.length] = temp;
    tmp=firstName.toLowerCase() +"= temp";
    eval(tmp);
};

add("Axe", "Warhol", "axe.warhol@supply.com", "(111)-2223454");
list(contacts);