const db = require('../db/dbConfig');
const bcrypt = require('bcrypt');
async function CreateUser(name, login, password, role) {
    await db.User.create({
        name: name,
        login: login,
        password: bcrypt.hashSync(password, 10),
        role: role
    }).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
};

async function CreateProduct(name, description, price) {
    await db.Products.create({
        name: name,
        description: description,
        price: price
    }).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
};
async function GetUsers(){
    return await db.User.findAll();
}
async function GetUserByLogin(login){
    return  await db.User.findOne({where:{login:login}});
}
async function GetProducts(){
    return await db.Products.findAll();
}
async function GetProductById(id){
    return await db.Products.findOne({where:{id:id}});
}

async function GetCategory(){
    return await db.Categories.findAll();
}
async function CreateCategory(name, description) {
    await db.Categories.create({
        name: name,
        description: description
    }).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
};
module.exports = {
    GetUsers, CreateUser,CreateProduct,GetProducts,GetUserByLogin,GetCategory,CreateCategory,GetProductById
}