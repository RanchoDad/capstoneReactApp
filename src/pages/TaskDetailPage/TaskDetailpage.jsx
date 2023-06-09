import { useNavigate, useParams } from "react-router-dom";
import { getTaskRequest, deleteTaskRequest } from "../../utilities/tasks-api";
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
    } )

    async function handleDelete(e){
        const deleteResponse = await deleteTaskRequest(task._id);
        if(deleteResponse.data === 'success'){
            navigate('/tasks')
        }
    }
    return (
        <>
        <h1>Your Task</h1>
        { loading ? <p className="load-spin">Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <TaskDetail task={task} 
        handleDelete={handleDelete} 
        setTask={setTask}>

        </TaskDetail>
        }
        </>
    )
}