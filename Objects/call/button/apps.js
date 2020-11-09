const counter = {
    count: 0,
    name:'sherlock holmes',
    pata:'b221 baker street',
    increment() {
    console.log(this);
    // here this refers to
    // count and increment
    // we are targeting count and adding 1 with every increment run
    this.count++;
    console.log(this.count);
    },
};
// selecting increment function in object
const cn = counter.increment;
console.log(cn.bind( cn ));

const btn = document.querySelector('.increment');
// fail
// btn.addEventListener( 'click', counter.increment );

// btn.addEventListener( 'click', counter.increment.bind( counter ) );

const increment = counter.increment.bind( counter );
btn.addEventListener( 'click', increment );
// btn.removeEventListener( 'click', increment );


this.x = 9; // global scope value
const module = {

  x: 42,
  getX: function() {
    return this.x;
  },

  y: 1802,
  getY:function (){
      return this.y
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined
console.log(module.getX())

const boundGetX = module.getX.bind(module);
console.log(boundGetX());

const basex = module.getY.bind(module)
console.log(basex())


class Doc {
    constructor(count){
      this.count = 0;
  }

    counter = {
      count : 0,
      increment(counter) {
        console.log(this);
        // here this refers to
        // count and increment
        // we are targeting count and adding 1 with every increment run
        this.count++;
        console.log(`${this.name} ${counter} is -> ${this.count}`);
        }
  };


    render() {
      const btn = document.querySelector('.incr');
      btn.addEventListener( 'click', this.counter.increment.bind( {name:'Ramesss Bhai'},'counter' ) )
  }

}

const b = new Doc();
b.render();

//
//
//
class Doc2 {
    name = 'Natwar Lal'
    count = 0;
    increment(counter) {
      console.log(this);
      // here this refers to
      // count and increment
      // we are targeting count and adding 1 with every increment run
      this.count++;
      console.log(`${this.name} ${counter} is -> ${this.count}`);
      }

    render() {
      const btn = document.querySelector('.incr2');
      btn.addEventListener( 'click', this.increment.bind( this , 'counter' ) )
  }

}

const c = new Doc2();
c.render();
