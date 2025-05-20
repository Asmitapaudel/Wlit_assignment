const express=require("express")
const app=express()
const port=3000



//middleware
const authmiddleware=(req,res,next)=>{
    const secret=req.params.id
    if(secret=="1"){
        console.log("hii form 1")
    }else if(secret=="2"){
        console.log("hii form 2")
    }
    res.status(401).send("You are unauthorize")
    next()
    

}

app.get("/:id",authmiddleware,(req,res)=>{
    // const secret=req.params.id
    // if(secret=="1"){
    //     res.send("hii form 1")
    // }else if(secret=="2"){
    //     res.send("hii form 2")
    // }else{
    //     res.status(401).send("You are unauthorize")
    //     next()
    // }
    
    res.send("hello wold")
})
app.get("/:id/contact",authmiddleware, (req,res)=>{
    res.send("985666")})
app.get("/about", (req,res)=>{
    res.send("HII Asmita")})
app.listen(port,()=>{
    console.log("Server listen on port ${port}")
})
