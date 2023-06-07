import { tasksIndexRequest } from '../../utilities/tasks-api';
import { useEffect, useState } from 'react'
import TasksList from '../../components/TasksList/TasksList';
import { Link } from "react-router-dom";
import FormatDate from '../../components/FormatDate/FormatDate';


export default function TasksIndexPage(){
    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        console.log('loading...')
        async function getTasks(){
            const sortTasks = await tasksIndexRequest();
            const tasks = sortTasks.sort((a, b) => {
                // Sort tasks in descending order based on createdAt
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            setTasks(tasks)
        }
        getTasks();
    }, [])
    return(
        <>
        <h1>Here is your list of tasks, newest at the top</h1>
        <Link to="/newtasks">  
        <h1>Create your own tasks</h1>
        </Link>
        <TasksList tasks={tasks}></TasksList>
        </>
    )
}