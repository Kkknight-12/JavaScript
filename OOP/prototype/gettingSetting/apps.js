const course = {
    title: 'JavaScript',
    rating: 5,
    name: 'knight',
    end:'ending'

    // userName(){
    //     console.log(`${this.name}`)
    // }
}

console.log( Object.getPrototypeOf( course ) )

// setting prototype
// you can overwrite prototype that has been assigned to object
// after the object has been created
Object.setPrototypeOf( course, { 
    userName: function() {
        console.log( `${this.rating}` )
    }
})

course.userName() // output -> 5

// overwriting username output from rating to title
Object.setPrototypeOf( course, { 
    userName: function() {
        console.log( `${this.title}` )
    }
});

course.userName() // output -> JavaScript.
console.dir(course);

// but when you over this way you over write the whole proto with 
// new function, above old userName method will be overwritten with 
// courseTitle
Object.setPrototypeOf( course, { 
    courseTitle: function() {
        console.log( `${this.title}` )
    }
});
course.courseTitle()
console.dir(course);

// keeping the old and adding new methods
Object.setPrototypeOf( course, { 
    ...Object.getPrototypeOf(course),
    courseEnd: function() {
        console.log( `${this.end}` )
    }
});
course.courseEnd()
console.dir(course); // now you will have two function courseEnd, courseTitle.

// you can also create object prototype with Object. method
// it will create an empty object but,
// it take object as a parameter.
// object passed in will be set as a prototype
const student = Object.create( { 
    printProgress: function(){
        console.log(this.progress)
    }
} )
console.log(student)
// {}
//  __proto__: 
//      printProgress: ƒ ()
//      __proto__: Object

// setting property 
student.name = 'Luffy'
// or can also use Object.defineProperty()
Object.defineProperty( student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 'weak',
    writable: false,
})

// Object.create() also take second argument that is property
// PropertyDescriptorMap
const Teacher = Object.create( {
    exp: function(){
        console.log(this.experience)
    }
    },{
    experience:{
        configurable: true,
        enumerable: true,
        value: 8 ,
        writable: false,
    }} 
)
console.log(Teacher)

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // {make: "Ford", model: "Mustang", year: 1969}

let va = {make: "Ford", model: "Mustang", year: 1969}
console.log(va)
console.log(va['make'])