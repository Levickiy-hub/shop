const express = require('express');
const {CreateCategory} = require("../controllers/category");
const {GetCategory} = require("../controllers/category");
const router = express.Router();

router.get('/',async function (req,res){
    await GetCategory(req,res);
})
router.post('/',async function (req,res){
    await CreateCategory(req,res);
})
module.exports = router;
