// import dotenv
 // loads .env files contents into process.env by default
require('dotenv').config()


const express = require('express')


const cors = require('cors')
 
// import router

const router= require('./Routes/router')
// impprt mongoose connecrion.js

require('./DB/connections')

// create server

const regiserver =express()

regiserver.use(cors())

regiserver.use(express.json())

// servr use router
regiserver.use(router)

// set port  but 

const PORT=4000 || process.env


regiserver.listen(PORT,()=>{
    console.log(`Server Runnung Successfully at Port Number ${PORT}`);
})

regiserver.get('/',(req,res)=>{
    res.send(`<h2>server running Successfully and eady to assecpt client request</h2>`)
})

regiserver.post('/',(req,res)=>{
    res.send('post reqest')
})

