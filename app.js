const express=require("express")
const app=express()
const bookrouter=require("./main/student")
const coursesrouter=require("./main/course")
app.get("/",(req,res)=>{
  res.send("Welcome to the Student & Course Portal API!")
})
app.use("/students",bookrouter)
app.use("/courses",coursesrouter)
app.use((req,res)=>{
  res.send("page not found")
})
app.listen(3000,()=>{
  console.log("server is running")

})