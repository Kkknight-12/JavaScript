/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance 
*/

// function Account( name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
// }

// const BabuRao = new Account('BabuRao', 200);
// const Raju = new Account('raju', 0);

// Account.prototype.bank = 'CHASE';
// Account.prototype.deposit = function( amount ){
//     console.log(`balance was ${this.balance}`)
//     this.balance += amount;
//     console.log( `Hello ${this.name}, amount deposited is ${amount} now your balance is ${this.balance}`)
// }
// console.log(BabuRao.bank)
// BabuRao.deposit(200)
// Account.deposit

class Account {

    // properties defined here will be
    // carried to all the instance created
    constructor( name, initialBalance ){
        this.name = name;
        this.balance = initialBalance;
    } 

    // properties defined will also be carried to all the instance
    // but they are hardcoded
    bank = 'RamLal RamDas BadiyaWala Bank'

    // method
    deposit( amount ){
        this.balance += amount;
        console.log(`Hello ${this.name}, amount deposited is ${amount} now your balance is ${this.balance}`)
    }

    withdraw( amount){
        this.balance -= amount;
        console.log(`Hello ${this.name}, amount withdrawn is ${amount} now your balance is ${this.balance}`)
        console.log(this)
    }

}

const BabuRao = new Account( 'BabuRao', 200 );
console.log(BabuRao);
console.log(BabuRao.name)
console.log(BabuRao.balance)
console.log(BabuRao.bank)
BabuRao.deposit(200)
BabuRao.withdraw(5)

// example  2
class Person {
    constructor( firstName, occupation, age, hobbies = [] ) {
        this.firstName = firstName;
        this.occupation = occupation;
        this.age = age;
        this.hobbies = hobbies;
    }

    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        let hob = `${this.firstName} hobbies are ` 

        if (this.hobbies.length >= 1) {

            this.hobbies.forEach( (hobby) => {
                hob += `${hobby} |`
            }); 
        return `${bio}  ${hob}`
        } else {
        return bio
        }
    }

    // setName(){
    //     const names = fullName.split(' ');
    //     this.firstName = name[0]
    //     this.lastName  = names[1]
    // }
}
const me =  new Person('Raju', 'ITUC', 44, ['Note hi Note', '1000 Ka Note' ,'Bohot Sare Note'])
console.log(me)
console.log( me.getBio() )

const me2 =  new Person('Shyam', 'Accountant', 44)
console.log( me2.getBio() )
console.log(me2);