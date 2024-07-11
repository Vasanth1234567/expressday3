const express=require('express')
const { getAllTaskData, getTaskById, addNewTask, updateTask, deletedTask } = require('../controller/taskController')
const router=express.Router()
// router.param("id",(req,res,next,id)=>{
//     req.task=taskData[id-1]
//     next()
// })
router.get("/getAllTasks",getAllTaskData)
router.get("/getTaskById/:id",getTaskById)
router.post("/addNewTaskData",addNewTask)
router.put("/updateTaskData/:id",updateTask)
router.delete("/deleteTaskData/:id",deletedTask)
module.exports=router