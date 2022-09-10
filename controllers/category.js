const db = require('../db/dbController');

async function GetCategory(req,res){
    res.send(await db.GetCategory());
}
async function CreateCategory(req,res){
    try{
        const {name,description} = req.body;
        await db.CreateCategory(name,description);
        res.send();
    }
    catch (e) {

    }
}
module.exports={
    GetCategory,CreateCategory
}