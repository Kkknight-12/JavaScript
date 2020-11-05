// /////////////////////
// Contructor Method   /
// ////////////////////
class Product {
    // title = 'DEFAULT';  //these fields are called Class Fields
    // imageUrl;
    // description ;
    // price;

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

class ProductItem {
    constructor( product ) {
      this.product = product;
    }

    render() {
         const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" />
                <div class="product-item_content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        return prodEl;
    }
}

// 
class ProductList {
    products = [ 
        new Product (
        
            'A  Pillow',
            
            'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4rUSM1IY6-u3CW332UCRP5fZ7hnbzMZyfMZNeyhMhWe3KeP3YR6y4lEkkOORT5oo_utkpX0XzaOZTZ6TW2KmniprQ4DrBuEgb_S5KqAo8d3MzwJjUQcgw&usqp=CAE',
            19.99,
            'A soft pillow!'
       ),

       new Product (

            'A Carpet',

            'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGOGVv80DZW3qNCUnzp4krvrtUz1fwA_t_qvCjDO4LML30v4N0cCauKnsfASoRyL1RTxN2OeZd8_ahxnw_rMkEVjVltNAel_hzWnavGfk&usqp=CAE',
            89.99,
            "A carpet which you might like - or not."
        
       )
    ];
 
    constructor () { }

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for ( const prod  of this.products ) {
        const productItem = new ProductItem( prod );
        const prodEl = productItem.render();
        prodList.append(prodEl);
        }   
        renderHook.append(prodList);
    }
}
const productListC = new ProductList();
productListC.render();