const router= require("express").Router()
const {postCategory,getCategories} = require("../modules/categories")

router.post("/",postCategory)
router.get("/",getCategories)

module.exports=router