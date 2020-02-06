const Product = require('../../models/Product');
const Cart = require('../../models/Cart');

exports.getAllProducts = (req,res,next) => {
    Product.fetchAll(products => {
        console.log(products);
        res.render('shop/listProducts',{
            yourTitle: 'ProductList',
            prods: products
        });
    });
}

exports.getCartProducts = (req,res,next) => {
    res.render('shop/cart',{
        yourTitle:'Cart'
    });
}

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout',{
        yourTitle:'Confirm Order'
    });
}

exports.getProductById = (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, (product) =>{
        res.render('shop/details',{
            yourTitle:'Details',
            prods:product
        });
    });
}

exports.postCartProducts = (req,res,next) => {
    const cartProducts = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
      });
      res.redirect('/cart');
}