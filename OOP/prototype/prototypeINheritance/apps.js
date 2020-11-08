function User( username, email, nickname ) {
    this.username = username;
    this.email = email;
    this.nickname = nickname;
    // this.login = function() {
    //     console.log(`${this.username} logged in `);
    // };
}

// now i want every object made on above function to have prototype
// saving the log in method to prototype
User.prototype.login = function ( ) {
    // this keyword inside of your prototype
    // always refer to your object (here UserP) on which you call the method
    console.log(`${this.username} has logged in`)
}

const userOne = new User('userOne','one@gmail.com')
console.log(userOne)
userOne.login()

const userTwo = new User('userTwo', 'two@gmail.com')
console.log(userTwo)

// attaching logout method to prototype
User.prototype.logout = function ( ) {
    console.log(`${this.username} has logged out`)
}
userOne.logout()

// ////////////////
// Inheritance /
// /////////////
// admin method will inherit the above method 
// and will have its own method too
// adding new paramenter called title

function Admin( username, email, title ) {
    // .call() will call the above (User) constructor
    // first argument  contact of what this keyword will be equal to inside
    // User constructor function
    User.call( this, username, email )

    // adding title parameter
    this.title =  title
}

const userThree = new Admin('userThree','three@gmail.com', 'pirate')
console.log(userThree);

// inherititng all prototype of User constructor
Admin.prototype =  Object.create(User.prototype)

const userFour = new Admin('userFour','four@gmail.com', 'navyAdmiral')
console.log(userFour);

console.log(Admin.prototype)
userFour.logout();


