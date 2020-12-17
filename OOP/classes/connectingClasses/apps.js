// Connect classes with Constructor, super
class Product{
    constructor( title, desc ){
        this.title = title;
        this.description = desc;
    }
}

class Component {  
    //         boolean is overwrite to false, pappu = 'Pappu Bhai' from line 26
    constructor( hookId, shouldRender = true, pappu ) { // hookId = "app" from line 24 
        this.hookId = hookId; // 'app'
        // this.pappu = pappu
        if( shouldRender ){  // false
            this.render();
        }
    }
}

class Cart
    extends Component {
        products = [];
        
        constructor( hookId, pappu ) { // hookId = "app" from line 89 , pappu = undefined
            // hookId = "app", shouldRender = false 
            super( hookId, false, pappu = 'Pappu Bhai' ); 
            this.hookId = hookId;
            this.pappu = pappu // can be declared in Component, line 13 
            this.render();
        }

    render() {
        console.log( 'cart' )
        this.products = [
            new Product(
                'A pillow',
                'Lelo yr bhai sab'
            ),
            new Product (
                'Ek Tamator',
                'yee 10 rupya 10 rupiya'
            )
        ]
        this.renderProducts();
        console.log( this.pappu ) // pappu = 'Pappu Bhai'
    }

    renderProducts() {
        const Id = document.getElementById( this.hookId )
        const prodList = document.createElement( 'ul' )
        prodList.className = 'product-class'

        for (const prod of this.products) { 
            const productItems =  new ProductItem( prod );
            const prodEl = productItems.render();
            prodList.append( prodEl );
        }
        Id.append(prodList)
    }
}

class ProductItem {
    constructor( product ) { // prod -> products = title, description
        this.product = product;
    }

    render() {
        const prodEl = document.createElement( 'li' )
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
        <h2>${ this.product.title }</h2>
        <p>${ this.product.description }</p>
        </div>
        `;
        return prodEl;
    }
}

class Shop {
    constructor(){
        this.render();
    }
    render(){
        new Cart( 'app' )
    }
}

class App {
     static init(){
        const shop = new Shop()
    }
}

App.init();

// 
// 
class Pet { 
    constructor( name, age ) {
        this.name = name; // A-4
        this.age = age; // A-4
    }
}

class Cat
    extends Pet { // tuna , 6, lives = 9 is default
        constructor( name, age, lives = 9 ) { // A-2 from line 114
            super( name, age ); // A-3
            this.liveS = lives; // A-5 declaring the parameter
    }
}

const tuna = new Cat('tuna', 6) //  A-1
console.log(tuna)
console.log(tuna.liveS)
console.log(tuna.liveS = tuna.liveS + 100 ) // adding 100 to default age