
function isValidPAssword(password, username){
    if(password.length <8){
        return false;
    }
    // checking for spaces
    if(password.indexOf(' ')!==-1){
        return false;
    }
    // checking is both arguments dont start with same letter/string
    if (password.indexOf(username)!==-1){
        return false;
    }
    return true
}

console.log(isValidPAssword('asd12','qwasas'));

// re-factoring code
function validPassword(password, username){
    if (
        password.length < 8 ||
        password.indexOf(' ')!==-1||
        password.indexOf(username)!==-1
        )

        {
            return false;
        }
        return true;

}
console.log(validPassword('asd12bhhhg','qwahkhgbsas'));

console.log('---------------------')
// 
function isAvalidPassword(password, username){

    const tooShort =   password.length < 8;
    const hasSpace  =  password.indexOf(' ')!==-1;
    const tooSimilar =   password.indexOf(username)!==-1;

    if(tooShort || hasSpace || tooSimilar){
        return false;
    }
    return true;
    
}

console.log(isAvalidPassword('asd12bhhhg','qwahkhgbsas'));