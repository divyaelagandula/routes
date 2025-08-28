const express=require("express")
const app=express()
const userroutes=require("./ecomers/user")
const productroutes=require("./ecomers/product")
const cartroutes=require("./ecomers/cart")
app.use("/users",userroutes)
app.use("/products",productroutes)
app.use("/cart",cartroutes)
app.get("/",(req,res)=>{
  res.send("<h1>WELCOME TO ECOMERSE WEBSITE</h1>")
})
app.listen(3000,()=>{
  console.log("server is running")

})