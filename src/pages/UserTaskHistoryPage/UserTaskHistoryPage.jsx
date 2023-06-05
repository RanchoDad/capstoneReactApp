import { tasksIndexRequest } from '../../utilities/tasks-api';
import { useEffect, useState } from 'react'
import TasksList from '../../components/TasksList/TasksList';
import { Link } from "react-router-dom";


export default function TasksIndexPage(){
    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getTasks(){
            const tasks = await tasksIndexRequest();
            setTasks(tasks)
        }
        getTasks();
    }, [])
    return(
        <>
        <h1>Here are the glittering tasks of Hollywood</h1>
        <TasksList tasks={tasks}></TasksList>
        <Link to="/newtasks">  
        <h1>Create your own tasks</h1>
        </Link>
            
        </>
    )
}