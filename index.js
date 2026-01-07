const express = require("express")
const app= express()


app.get("/",(req,res)=>{
    res.send("jenkins deployment")
})



app.listen(4001,()=>{
    console.log("server is listen at 4001 port")
})


