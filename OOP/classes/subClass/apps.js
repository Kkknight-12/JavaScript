// extend

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

    setName(fullName) {
        const name = fullName.split(" ");
        this.firstName  = name[0]
    }
}

class Employee extends Person {
    // sequence must match with new instance me
    constructor( firstName, occupation, age, position, hobbies ) {
        super( firstName, occupation, age, hobbies )
        this.position = position
    }

    // by defining the method with same name you overwriting the parent method
    // uncomment to see changes
    // getBio(){
    //     return `${this.firstName} is a ${this.position}`
    // }

    fullName(fullName){
        const name = fullName.split(" ")
        this.firstName = name[0]
        this.middleName = name[1]
        this.lastName = name[2]
    }
}
const me = new Employee( 'BabuRao', 'Owner Mohini Theatre', 50, 'Boss', ['Maali', 'Kele Ka Bhav'])
console.log(me.getBio())
me.fullName('BabuRao GanpatRao Apte')
console.log(me.firstName)
console.log(me.lastName)
console.log(me.occupation)
console.log(me)

// you can nest the class with subclass
class follower extends Employee {
    constructor( firstName, age ) {
        super( firstName, age )
        this.follower = ['Raju'];
    }
    addFollower(name){
        this.foLLower = [...this.follower]
        this.foLLower.push(name)
        this.follower = this.foLLower
        return `BabuRao ke Follower hai ${this.follower}`
    }
    removeFollower(name){
        this.follower = this.follower.filter( (n) => {
            return n !== name
        })
    }
}
const babuBhaiKiFoj = new follower()
console.log(babuBhaiKiFoj)
babuBhaiKiFoj.firstName = 'BabuRao'
babuBhaiKiFoj.age = 56
console.log(babuBhaiKiFoj.addFollower('Shyam'))
console.log(babuBhaiKiFoj.addFollower('Anuradha'))
console.log(babuBhaiKiFoj.addFollower('Munna'))
// console.log(babuBhaiKiFoj.follower);

babuBhaiKiFoj.removeFollower('Munna')
console.log(babuBhaiKiFoj.follower);

babuBhaiKiFoj.removeFollower('Anuradha')
console.log(babuBhaiKiFoj.follower);

// const pets = ['cat', 'dog', 'bat'];

// // const incl = pets.includes('cat')
// for( i of pets){
//     if(i!=='cat'){
//         console.log(i)
//     }
// }

// 
class Qualification extends Person {
    constructor( firstName, occupation, age, grade, hobbies ) {
        super( firstName, occupation, age, hobbies )
        this.grade = grade;
    }

    updateGrade(change){
        this.grade += change
    }

    passYAFail(){
        const status = this.grade >= 70 ? "Pass 🎉 ho bhai" : "Fail 😭 ho yr"
        // never mind the high qualifying marks
        return `Your grade is ${this.grade} ${status}`
        
    }
}

const urBtao = new Qualification('Raju', 'ITUC', '40', 33, []);
console.log(urBtao.grade)
// increase marks
urBtao.updateGrade(37)
console.log(urBtao.passYAFail())
console.log(urBtao.grade)

// 
// user class
class User {
    constructor( username, email ) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login(){
        this.score += 1;
        return `${this.username} just logged in`
    }

    logout(){
        return `${this.username} has logged out`
    }

    incScore(){
        // this.score += 1;
        return `${this.username} has score of ${this.score}`
    }
}
const userOne = new User('abban', 'abban.email.com')
console.log(userOne.login())
console.log(userOne.incScore())
console.log(userOne.logout())
console.log(userOne.login())
console.log(userOne.incScore())

const userTwo = new User('babban', 'babban.email.com')

// inherited sub class
class Admin extends User {
    constructor( username, email, title ){
        super( username, email );
        this.title = title;
    }

    deleteUser(user) {
        users = users.filter( (u) => {
           return u.username !== user.username;
        });
    }
}

const userThree = new Admin('chabban', 'chabban.email.com', 'Admin Bhai')

// accessing parent element
console.log(userThree.login())
console.log(userThree.logout())
console.log(userThree.login())

// creating userlist 
users = [ userOne, userTwo ]
console.log(users)

// 
console.log(userThree)

// using subclass property 
userThree.deleteUser(userOne)

// checking for remaining user
console.log(users)
console.log(userThree)
