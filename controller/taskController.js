const taskData=require('../datas/taskDatas')
const getAllTaskData = (req,res)=>{
    res.status(200).json(taskData);
}
const getTaskById =(req,res)=>{
    const id=Number(req.params.id)
    const index=taskData.findIndex(iterator=>iterator.id===id)
    if(index!==-1){
        return res.status(200).json(taskData[index])
    }
    return res.status(404).json({message:"Invalid Id!"})
    // let expectedTask
    // if(req.task){
    //     expectedTask=req.task
    // }
    // if(expectedTask){
    //     return res.status(200).json(expectedTask)
    // }
    // return res.status(404).json({message:"Invalid Id."})
}
const addNewTask=(req,res)=>{
    const newTask=req.body
    let isDuplicate=false;
    isDuplicate=taskData.some(iterator=>iterator.id===newTask.id)
    if(isDuplicate){
        return res.status(409).json({message:"Conflict in data"})
    }
    taskData.push(newTask)
    return res.status(201).json({message:"Added Succesfully"})
}
const updateTask=(req,res)=>{
    let id=Number(req.params.id)
    let index=taskData.findIndex(iterator=>iterator.id===id)
    if(index!==-1){
        const updatedTaskArray=req.body
        taskData[id-1]={id,...updatedTaskArray}
        return res.status(200).json({message:"Updated Successfully"})
    }
    return res.status(404).json({message:"Invalid Id."})
}
const deletedTask=(req,res)=>{
    let id=Number(req.params.id)
    let index=taskData.findIndex(iterator=>iterator.id===id)
    if(index!==-1){
        taskData.splice(id-1,1)
        return res.status(200).json({message:"Deleted Successfully."})
    }
    return res.status(404).json({message:"Invalid Id."})
}
module.exports={getAllTaskData,getTaskById,addNewTask,updateTask,deletedTask}