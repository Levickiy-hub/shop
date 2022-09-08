const db = require('../db/dbController');

async function PostUser(req,res){
    try {
        const {username, password, name, role} = req.body;
        await db.CreateUser(name, username, password, role || null);
        res.send('successfully');
    }
    catch (e){

    }
}
module.exports={
    PostUser
}