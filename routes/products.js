const express = require('express');
const {CreateProducts} = require("../controllers/products");
const {GetProducts} = require("../controllers/products");
const router = express.Router();

router.get('/',async function (req,res){
 await GetProducts(req,res)
})
router.post('/',async function (req,res){
    await CreateProducts(req,res);
})
module.exports = router;
