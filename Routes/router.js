// path to resolve the clint request

const express =require("express")


//import controllar

const usercontrollar=require('../Controllers/userControllar')

const router = new express.Router()

//path for resolving the request
// syntax== router.httrequest("path to resolve request ") how to resolve the request inside the controller
// registration

router.post("/user/register",usercontrollar.register)

//


module.exports=router