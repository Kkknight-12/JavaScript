
// class Product{
//     constructor(title, desc){
//         this.title = title;
//         this.description = desc;
//     }
// }

// class Component {
//     constructor(hookId, shouldRender = true){
//         this.hookId = hookId;
//         if( shouldRender){
//             this.render();
//         }
//     }
// }

// class Cart
//     extends Component {
//         products = [];
//         constructor(hookId, shouldRender ){
//             super(hookId, shouldRender = false);
//             this.render();
//         }

//     render() {
//         console.log( 'cart' )
//         this.products = [
//             new Product(
//                 'A pillow',
//                 'Lelo yr bhai sab'
//             ),

//             // new Product (
//             //     'Ek Tamator',
//             //     'yee 10 rupya 10 rupiya'
//             // )
//         ]
//         this.renderProducts();
//     }

//     renderProducts() {
//         // const Id = document.getElementById('app')
//         const prodList = document.createElement('ul')
//         const prodEl = document.createElement('li')
//         for (const prod of this.products){
//             // console.log(prod.title)
//         prodList.innerHtml = 
//         ` <h2>${prod.title}</h2>
//           <p>${prod.description}</p>`;
//           prodList.append(prodEl);
//         }

//         // prodList.innerHtml = 
//         // ` <h2>${products.title}</h2>
//         //   <p>${products.description}</p>`;
//         //   prodEL.append(prodList);
        
//         // return prodEL;
//     }

//         // const prodEL = document.createElement('li')
    
//         // prodEL.innerHtml = 
//         // ` <h2>${this.products.title}</h2>
//         //   <p>${this.products.desc}</p>`;
//         // }
        
    
// }




// // class ProductItem 
// //     extends Cart{
// //     constructor(id, products){ // id = app, products = undefined
// //         super(products)
// //         this.id = id;
// //         this.render();
// //     }

// //     render() {
// //     const prodEL = document.createElement('ul')
// //     prodEL.innerHtml = 
// //    ` <h2>${this.products.title}</h2>
// //     <p>${this.products.desc}</p>`
// //     return prodEL
// //     }
// // }

// class Shop {
//     constructor(){
//         this.render();
//     }

//     render(){
//         new Cart('app')
//         // new ProductItem('app')
//     }
// }

// class App {

//      static init(){
//         const shop = new Shop()
//     }
// }

// App.init()


class Product {
    products = [{title:'A pillow',
                description:'Lelo yr bhai sab'}];

    renderProducts() {
            const Id = document.getElementById('app')
            // const prodList = document.createElement('div')
            const prodEl = document.createElement('li')
            for (const prod of this.products){
                // console.log(prod.title)
            prodEl.innerHtml = 
            `<div>
            <h2>asasdasd</h2>
            <p>${prod.description}</p>
            </div>`;
        }
        // prodList.append(prodEl);
        Id.append(prodEl)
        return Id;
    }
}

const p = new Product();
p.renderProducts()