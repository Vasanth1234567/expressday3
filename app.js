const express=require('express')
const app=express()
const PORT=3500
const taskRoute=require('./router/taskRouter')
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello World!"})
})
app.use("/api/v1/tasks",taskRoute)
app.listen(PORT,()=>console.log(`Server Started at http://localhost:${PORT}`))