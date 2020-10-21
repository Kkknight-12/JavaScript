const runner = {
    first:'Luffy',
    last:'Monkey D',
    title:'Pirate King'
}

// creating a function
function print(i){
    const {
        first,
        last,
        title
    } = i;
    console.log(`${first} ${last} ${title}`)
}
print(runner)
// you can add more properties if you have in the above code

// But when you have few specific properties to unpack,
// you can do in parameter itself

function printFun(
    {first,
    last,
    title}){
        console.log(`${first} ${last} ${title}`)
} 
printFun(runner);

// 
// 
const response =[
    'HTTPS',
    '200',
    'application'
]
function parseResponse([protocol, statusCode, contentType]){ console.log(`Status: ${statusCode}`)}
parseResponse(response)
