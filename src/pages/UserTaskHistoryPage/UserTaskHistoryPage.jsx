import { tasksIndexRequest } from '../../utilities/tasks-api';
import { useEffect, useState } from 'react'
import TasksList from '../../components/TasksList/TasksList';
import { Link } from "react-router-dom";


export default function TasksIndexPage(){
    const [complete, setComplete] = useState(false);
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
    const handleComplete = () => {
        setComplete(!complete);
        
    };
    return(
        <>
        <div class="container">
        <div class="row">
        <div className='col-lg-4'>
        
        <Link to="/newtasks" className="create-style">
            <div className="bounce">  
        <h1>Add Tasks Here</h1>
            </div>
        </Link>
        <TasksList tasks={tasks} onStateChange={handleComplete} complete={complete}></TasksList>
        </div>
            <div className='col-lg-8'>
        <h1 className="index-style ">Get organized and stay productive with this task management app</h1>
        </div>
        
        </div>
        </div>
        </>
    )
}