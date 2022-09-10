const db = require('../db/dbController');

async function GetProducts(req,res){
    const products = await db.GetProducts();
    res.send(products);
}
async function CreateProducts(req,res){
    const {name,price,description} = req.body;
    const products = await db.CreateProduct(name,description,price);
    res.send(products);
}
async function GetProductById(req,res){
    const {id} = req.params;
    const product = await db.GetProductById(id);
    res.send(product);
}

module.exports={
    GetProducts, CreateProducts,GetProductById
}