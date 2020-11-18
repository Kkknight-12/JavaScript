// const productList = {
//     products:[
//         {
//             title:'A  Pillow',
//             imageUrl:
//             'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4rUSM1IY6-u3CW332UCRP5fZ7hnbzMZyfMZNeyhMhWe3KeP3YR6y4lEkkOORT5oo_utkpX0XzaOZTZ6TW2KmniprQ4DrBuEgb_S5KqAo8d3MzwJjUQcgw&usqp=CAE',
//             price: 19.99,
//             description: 'A soft pillow!'
//         },
//         {
//             title: ' A Carpet',
//             imageUrl:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGOGVv80DZW3qNCUnzp4krvrtUz1fwA_t_qvCjDO4LML30v4N0cCauKnsfASoRyL1RTxN2OeZd8_ahxnw_rMkEVjVltNAel_hzWnavGfk&usqp=CAE',
//             price: 89.99,
//             description:"A carpet which you might like - or not."
//         }
//     ],
//     render() {
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';

//         for( const prod  of this.products ) {

//             const prodEl = document.createElement('li');
//             prodEl.className = 'product-item';
//             prodEl.innerHTML = `
//             <div>
//                 <img src="${prod.imageUrl}" alt="${prod.title}" />
//                 <div class="product-item_content">
//                     <h2>${prod.title}</h2>
//                     <h3>\$${prod.price}</h3>
//                     <p>${prod.description}</p>
//                     <button>Add to Cart</button>
//                 </div>
//             </div>
//         `;
//         prodList.append(prodEl);
//         }

//         renderHook.append(prodList);
//     }
// };
// productList.render();



// /////////////////////
// Contructor Method   /
// ////////////////////
class Product {
    title = 'DEFAULT';  //these fields are called Class Fields
    imageUrl;
    description ;
    price;

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

    printInfo(){
        console.log( `${this.title} ${this.description}` ) //this is called Class Method
    }
}

// method parameter work in sequential way
// you need to give all the parameter in sequential way to work
const info = new Product('tiTle', 'cd', 'descRiption' , 'we')
info.printInfo()

const productListC = {
   products: [
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
    ],

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for( const prod  of this.products ) {

            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}" />
                <div class="product-item_content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        prodList.append(prodEl);
        }
        
        renderHook.append(prodList);
    }
}

productListC.render();
