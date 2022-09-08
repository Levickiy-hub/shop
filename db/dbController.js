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
    return db.User.findAll();
}
async function GetUserByLogin(login){
    return db.User.findOne({where:{login:login}});
}
async function GetProducts(){
    return db.Products.findAll();
}

module.exports = {
    GetUsers, CreateUser,CreateProduct,GetProducts,GetUserByLogin
}