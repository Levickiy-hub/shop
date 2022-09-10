const express = require('express');
const {GetProductById} = require("../controllers/products");
const {CreateProducts} = require("../controllers/products");
const {GetProducts} = require("../controllers/products");
const router = express.Router();

router.get('/',async function (req,res){
 await GetProducts(req,res)
})
router.post('/',async function (req,res){
    await CreateProducts(req,res);
})
router.get('/:id',async function (req,res){
    await GetProductById(req,res)
})
module.exports = router;
