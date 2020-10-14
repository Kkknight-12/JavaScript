
//  variable defined in parent function is available to the nested function

function outer(){
    let hero = 'Iron Man';

    function inner(){
        let awesome = `${hero}, you are awesome!` // look for parent to get the variable(hero) value
        console.log(awesome);
    }
    inner();
}
outer()

// 
// 
function outerf(){
    let m = 'Outer';

    function inner(){
        let m = 'innerr';
        let f = `${m}, you are awesome!` // look for parent to get the variable(hero) value
        console.log(f);
    }
    inner();
}
outerf();



// when yoou have nested function, variable inside the immediate parent is used

function outter(){
    let hero = 'Wolverine';

    function innerr() {
        let hero = 'Batman'; //change name of hero

        function innermost(){
            console.log(hero.toUpperCase()) //call for the variable hero
        }
        innermost(); //need to run this function to work
    }
    innerr();
}
outter();

// 





