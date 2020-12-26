// A factory function is a function that returns a new object. 

function createTaxCal(tax){
    function calTax(amount){
        return amount * tax;
    }
    return calTax;
}

/*
inner funciton will be created eveytime we run createTaxCal 

now if I console log calculate vat amount for 100 and then 
again I repeat this for let's say 200, I just need to call 
this calculate vat amount function like this without passing 
in the value added tax percentage over and over again because 
I configured this once here with the help of this factory 
function and we're good to go thereafter.
*/

// adding different value for the tax argument
const calVatAmt = createTaxCal(0.19); 
const calIncTaxAmt = createTaxCal(0.25)

console.log(calVatAmt(100)); // tax = 0.19, amount = 100
console.log(calVatAmt(200));


/*
https://www.javascripttutorial.net/javascript-factory-functions/

A factory function is a function that returns a new object. 
The following creates a person object named john: */
// 
let john = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(john.getFullName());
/*
The john object has two properties: firstName and lastName, 
and one method getFullName() that returns the full name.

Suppose that you need to create another similar object 
called jane, you can  write code as follows */
let jane = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(jane.getFullName());

/*
The jane object has the same properties and method as the 
john object.The more object you want to create, the more 
duplicate code you need to copy.

To avoid copying the same code all over again and again, 
you can develop a function that creates the person object:
*/
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        }
    }
}

/*
When a function creates an object, it is called a factory 
function. The createPerson() is a factory function because 
it returns a new person object.

The following code uses the createPerson() factory function 
to create two objects john and jane:
*/
john = createPerson('John', 'Doe');
jane = createPerson('Jane', 'Doe');

console.log(john.getFullName());
console.log(jane.getFullName());

/*
With the factory function, you create any number of the 
person objects you want without duplicating code.

When you create an object, that object requires a space in 
the memory. If you have a thousand person objects, you need 
one thousand spaces in the memory to store these objects. 
These person objects, however, have the same getFullName() method.


To **avoid repeating the same getFullName() function** in the memory,
you can **remove the getFullName() method from the person object**:
*/

function createPerson2(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

const behavior = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

/*
And before calling the getFullName() method on the person object, 
you can assign the method of the behavior object to the person
object as follows:
*/

john = createPerson2('John', 'Doe');
jane = createPerson2('Jane', 'Doe');

// saving the getfullName function in created object john and jane
john.getFullName = behavior.getFullName;
jane.getFullName = behavior.getFullName;

console.log(john.getFullName());
console.log(jane.getFullName());

/*
It’ll more difficult if you have many methods and have to assign them manually.
This is why the Object.create() method comes into play.
*/
const behavior2 = {
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

function createPerson3(firstName, lastName) {
    let person = Object.create(behavior2);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
}
john = createPerson3('John', 'Doe');
jane = createPerson3('Jane', 'Doe');

console.log(john.getFullName());
console.log(jane.getFullName());