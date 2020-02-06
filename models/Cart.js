const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProductToCart(id, productPrice) {
        fs.readFile(p,(err,fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if(!err)
            {
                cart = JSON.parse(fileContent);
            }
            const existingIndexProduct = cart.findIndex(prod => prod.id === id);
            const product = cart.products[existingIndexProduct];
            let updated;
            if(product)
            {
                updated = {...product};
                updated.qty = updated.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingIndexProduct] = updated;
            }
            else{
                updated = {id: id, qty: 1};
                cart.products = [...cart.products,updated];
            }
            cart.totalPrice = cart.totalPrice + productPrice; 
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        })
    }
}