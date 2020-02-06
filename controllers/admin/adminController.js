const Product = require('../../models/Product');

exports.getAddProducts = (req,res,next) => {
    res.render('admin/addProduct',{
        yourTitle: 'Add A Product'
    })
    // res.sendFile(path.join(rootDir,'views','shop.html'));
}

exports.postAddProducts = (req,res,next) => {
    const product = new Product(req.body.title,req.body.price);
    product.save();    
    res.redirect('/');
}

exports.getListAdminProducts = (req,res,next) => {
    Product.fetchAll(products => {
    res.render('admin/listAdminProducts',{
        yourTitle:'List Admin Products',
        prods: products
    })
});
}

exports.getEditProducts = (req,res,next) => {
    res.redirect('/');
}
exports.getDeleteProducts = (req,res,next) => {
    res.redirect('/');
}