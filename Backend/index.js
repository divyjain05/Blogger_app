const express = require('express')
const {PrismaClient}= require('@prisma/client')
const app = express()
const prisma = new PrismaClient

app.use(express.json)

app.post('/',(req, res)=>{
    const data = prisma.user.create({
        data: req.body
    })
})

app.listen(3001,()=>{
    console.log("Server Started...")
})