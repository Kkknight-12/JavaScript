const allLi = document.querySelectorAll('li');

// ////////////////////////
// Accessing each element /   
// ////////////////////////
//        for loop        
for(let i = 0; i < allLi.length; i++ ){
    console.log(allLi[i].innerText)
}

// for let 
for(let li of allLi){
    console.log(li.innerText)
}


// /////////////////////////
// changing inner text    //
// innerHtml must be      //
// used to change aything //
// inside html            //
// /////////////////////////
for(let i = 0; i < allLi.length; i++ ){
    allLi[i].innerHTML = 'change is <strong> good</strong>'
}

for (let li of allLi){
    li.innerHTML = 'One<strong> Punch</strong>'
}