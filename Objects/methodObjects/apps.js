// Methods
// We can add functions as properties on objects
// We call them methods !
// it help grouping different functions together

// simple function
const add =  function(x,y){
    return x + y
}
console.log(add(2,3))

// adding function to object which is called method
// creating object called mathadd
// key is add inside the curly bracket and value is
// function stored inside the add, saved above
const mathadd = {
    add
}
// a method is called with dot notation mathadd.add(x, y)
console.log(mathadd.add(1,2))

// 
// 
const math = {
    // key is multiply and value is function here
    multiply :  function (x,y){
        return x*y;
    },
    divide: function (x,y){
        return x/y;
    } ,
    square: function (x){
        return x*x
    }
};

// use dot to access function inside math object
console.log(math.multiply(4,3));
// 
// 
// 
// Shorthand method
const maath = {
    blah:'Hi!',
    add(x,y){
        return x+y;
    },
    multiply (x,y){
        return x*y;
    }
}
console.log(maath.add(50,60));

// 
// 
const auth  = {
    username:'Knight',
    login(){
        console.log('login');
    },
    logout(){
        console.log('logout')
    }
}
console.log(auth)
console.log(auth.username)
auth.login()
auth.logout()

