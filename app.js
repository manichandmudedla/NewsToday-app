const express=require('express')
const cors=require('cors')
const app=express()
var port= process.env.PROT || 4000
app.use(cors())
app.listen(port,()=>console.log(`App started at https://localhost:${port}`))