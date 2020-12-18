const course = {
    title: 'JavaScript',
    rating: 5,
    name: 'knight',

    userName(){
        console.log(`${this.name}`)
    }
}

console.log( Object.getPrototypeOf( course ) )

// setting prototype
Object.setPrototypeOf( course, { 
    printRating: function() {
        console.log( `${this.rating}` )
    }
})

course.printRating()
course.userName()

Object.setPrototypeOf( course, { 
    userName: function() {
        console.log( `${this.title}` )
    }
});
course.userName();
console.dir(course);