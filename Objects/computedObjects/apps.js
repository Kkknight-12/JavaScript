// conputed properties are just an improvement for  the  object literal syntax where we can add a property with a dynamic key

// key host with value of role
const role = 'host';
// key person with value of jools Holland
const person = 'Jools Holland'


// intialising object
const team = {};
team[role]= person;
console.log(team)

// 
// 
const role2 = 'Director';
const person2 = 'James Cameron'

const team1 = {}
team1[role2]= person2;
console.log(team1)

// We can use a varaible as a key name in an object literal property!
const user = 'Jools'

const userRoles = 
        { 
    [user]:'Admin',
    // undefined key varaible must be in quotes
    ['name']:'Knight',
    // when it quotes treat them as string
    ['1+2']: '12' ,
    // if not number
    [12+1]: '?'
}
console.log(userRoles)

// adding key value to existing to object
// 
// 
function addProp(obj, k, v){
    const copy = {
        ...obj
    };
    copy[k] = v;
    return copy;
}
const res = addProp(team, 'happy',':)')
console.log(res)

// 
// using computed property to write same function
// using arrow function

// using parenthesis for implicit return, return word is not used
// const addprop = (obj,k,v)=>({
//     ...obj,
//     [k]:v
// })

// using bracket with return
const addProperty =(obj, key, value)=>{
    return {
        ...obj,
         [key]:value
        }
}
const result = addProperty(team1, 'happy', ':)')
console.log(result);

// 
const team001 = {}
console.log(addprop(team001, role, person));