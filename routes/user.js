const express= require('express')
const router= express.Router()
const users= require('../users.json')
const UserController= require('../controllers/UserController')

router.get('/users' , (req, res)=>{
    UserController.getuser(req,res)
})

module.exports=router;