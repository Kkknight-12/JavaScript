const countER = {
    count: 0,
    name:'sherlock holmes',
    pata:'b221 baker street',
    increment() {
    console.log(this); //countER{count, name, pata, increment}
    // here this refers to
    // count and increment
    // we are targeting count and adding 1 with every increment run
    this.count++;
    console.log(this.count);
    },
};
// selecting increment function in object
const cn = countER.increment;
console.log(cn.bind( cn ));

const btn = document.querySelector('.increment');
// fail
// btn.addEventListener( 'click', countER.increment );

// btn.addEventListener( 'click', countER.increment.bind( countER ) );

const increment = countER.increment.bind( countER );
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
    // count = 0; // b.count
    lastName = 'BHAI';
    counter = { 
      count : 0, // b.counter.count
      increment( counTer ) {
      // increment : (counTer) =>  {
        console.log(this); // Doc {name, count}
        // need to pass the full path to count as this is refered to window here
        b.counter.count++ // can be changed to b.count 
        console.log( `${this.firstName} ${this.lastName} ${counTer}  is -> ${b.counter.count}` );
      }
    };

    render() {
      const btn = document.querySelector('.incr');
      btn.addEventListener( 'click', this.counter.increment.bind( {firstName: 'Ramess', lastName: 'BHai' }, 'counter' ) )
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
      console.log(this); // Doc2 {name, count}
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