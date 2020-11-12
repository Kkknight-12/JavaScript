class Product {

    // adding constructor method
    // it accept any argument
    // in curly bracket you can assign value to these
    // parameters with the help of this keyword
    constructor( title, image, desc, price  ) {
        this.title = title; // these fileds are called Property
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    } 
    
}

// 
class ElementAttribute {
    constructor( attrName, attrValue ){
        this.name = attrName;
        this.value = attrValue;
    }
}

// component
class Component {

    constructor(renderHookId){
        this.hookId = renderHookId;
    }

    createRootElement( tag, cssClasses, attributes ) {
        const rootElement = document.createElement(tag);
        if( cssClasses ){
            rootElement.className = cssClasses; 
        }
        if( attributes && attributes.length > 0 ) {
            for( const attr of attributes ){
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);

        return rootElement;
    }
}

// 
// 
class ShoppingCart 
    extends Component {
    items = [];

    set cartItems( value ) {
        this.items = value;
        this.totalOutput.innerHTML = 
        `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce( (prevValue, curItem) => {
            return prevValue + curItem.price
        }, 0);
        return sum;
    }

    constructor( renderHookId ) {
        super( renderHookId );
    }

    addProduct( product ){
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
        <div class="cart_content" >
            <div>
            <h2>Total: \$${0}</h2>
            </div>
            <div class="button-cart-center">
                <button>Order Now!</button>
            </div>
        </div>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
};

// Item Class
class ProductItem
    extends Component {

    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addToCart() {
        App.addProductToCart( this.product );
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
    
        prodEl.innerHTML = `
        <div class="container">
            <img src="${this.product.imageUrl}" alt="${this.product.title}" />
            <div
            class="product-item_content">
                <h2>${this.product.title}</h2>
                <p>${this.product.description}</p>
                <h3>\$${this.product.price}</h3>
                <div class="button-center">
                <button>Add to Cart</button>
                </div>
            </div>
        </div>
        `;

        const addCardButton = prodEl.querySelector('button');
        addCardButton.addEventListener( 'click', this.addToCart.bind(this) );

    }
}; 

// List of all Products
class ProductList 
    extends Component {
    constructor(renderHookId) {
    super(renderHookId);
    }

    products = [ 
        new Product (  
            'A  Pillow',
            'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4rUSM1IY6-u3CW332UCRP5fZ7hnbzMZyfMZNeyhMhWe3KeP3YR6y4lEkkOORT5oo_utkpX0XzaOZTZ6TW2KmniprQ4DrBuEgb_S5KqAo8d3MzwJjUQcgw&usqp=CAE',
            'A soft pillow!',
            19.99
        ),

       new Product (
            'A Carpet',
            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGOGVv80DZW3qNCUnzp4krvrtUz1fwA_t_qvCjDO4LML30v4N0cCauKnsfASoRyL1RTxN2OeZd8_ahxnw_rMkEVjVltNAel_hzWnavGfk&usqp=CAE',
            "A carpet which you might like - or not.",
            89.99,       
        )   
    ];

    render() {

        this.createRootElement('ul', 'product-list', 
        [new ElementAttribute('id', 'prod-list')]);

        for ( const prod of this.products ) {

            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
        }   
    }
};


class  Shop {
    render() {

        this.cart = new ShoppingCart('app');
        this.cart.render();

        const productList  = new ProductList('app');
        productList.render()
    }
}

// creating a static class
class App {
    static cart;

    static init() {
        const shop = new Shop()
        shop.render()
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product)
    }
}

App.init();
