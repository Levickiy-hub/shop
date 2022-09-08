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

module.exports={
    GetProducts, CreateProducts
}