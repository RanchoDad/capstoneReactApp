import { useNavigate, useParams } from "react-router-dom";
import { getTaskRequest, deleteTaskRequest, updateTaskRequest } from "../../utilities/tasks-api";
import { useEffect, useState } from 'react';
import TaskDetail from "../../components/TaskDetail/TaskDetail";

export default function TaskDetailPage(){
    let { taskId } = useParams();
    const [task, setTask] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getTask(){
            const task = await getTaskRequest(taskId);
            console.log(task)
            if(task){
                setTask(task)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No Tasks')
                setLoading(false)
            }
        }
        getTask()
    }, [] )

    async function handleDelete(e){
        const deleteResponse = await deleteTaskRequest(task._id);
        if(deleteResponse.data === 'success'){
            navigate('/tasks')
        }
    }
    async function handleComplete (e){
        const completeTask = {
          completed: true,
          completeDate: new Date()
        }
        try{
          const newTask = await updateTaskRequest(task._id, completeTask)
          setTask(newTask);
          navigate('/tasks')
        }catch(err){
          setError("Try Again")
        }
      }
    return (
        <>
        <h1>Your Task</h1>
        <br />
        { loading ? <p className="load-spin">X</p>
        :
        error ? <p>{error}</p> 
        :
        <TaskDetail task={task} 
        handleDelete={handleDelete} 
        setTask={setTask}
        handleComplete={handleComplete}>

        </TaskDetail>
        }
        </>
    )
}