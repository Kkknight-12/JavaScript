class BaseA {
    constructor( cN, name ){
        this.name = name;
        this.cN = cN;
    }

    addr(){
        console.log( `called from subB ${this.name}` )
    }

    baseAddr(){
        console.log( `called from BaseA ${this.name}` )
    }

    comname(){
        console.log( `Company name is ${this.cN}` )
    }
}

class SubB extends
    BaseA {
    constructor( name ){
        super(); // must be written to connect to BaseA
        this.name = name;
    }

    Fname(){
        console.log(`called from SubB ${this.name}`)
    }
}

const b = new SubB('Knight');
b.Fname()
// when the base class is called from sub class
// name will be from sub class -> Knight
b.addr(); 

// when the base class is called directly
// name will taken from arguments passed -> luffy
// parameters that are included in BaseA
// are taken as arguments
const a = new BaseA( 'AM', 'Luffy' );
a.comname();
a.baseAddr();

// super must be written when you are making your owm constructor
class BaseC {

    addr(){
        console.log(`called from BaseC ${this.name}`)
    }
}

class SubD extends
    BaseA {
    name = 'luf';

    Fname(){
        console.log(`called from SubD ${this.name}`)
    }
}

const e = new SubD('luffy')
e.addr();
e.Fname()