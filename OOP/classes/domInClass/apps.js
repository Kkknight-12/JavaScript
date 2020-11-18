class ProductList {
    constructor( product ){
        this.product = product;
        // super(product);
    }

    render() {
        const prodEl = document.createElement( 'div' )
        prodEl.className = 'grid-item';
        prodEl.innerHTML = `
        <div>
        <h2>${this.product.title}</h2>
        <p>${this.product.description}</p>
        </div>
        <div> <button>Add to Cart</button> </div>
        `;
        return prodEl;
    }
}

class Product {
    products = [ 
    { title:'A pillow',
    description:'Lelo yr bhai sab' },
    { title:'Allo',
    description:'Yee 10 rupiyaa 10 rupiyaa' },
    { title:'paneer',
    description:'100 rupiyaa 100 rupiyaa' }
];

    renderProducts() {
        const Id = document.getElementById( 'app' )
        const prodList = document.createElement( 'div' )
        prodList.className = 'grid-container'

        for ( const prod of this.products ) {

            const productItems =  new ProductList( prod );
            const prodEl = productItems.render();
            prodList.append( prodEl );
        }
        Id.append( prodList )
    }
}

const p = new Product();
p.renderProducts()