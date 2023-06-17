import { tasksIndexRequest } from '../../utilities/tasks-api';
import { useEffect, useState } from 'react'
import TasksList from '../../components/TasksList/TasksList';
import TasksListComplete from '../../components/TasksList/TasksListComplete';

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
    
    const handleClick = () => {
        window.location.href = "/newtasks";
      };
   
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <button 
                        className="btn btn-info btn-styles" 
                        onClick={handleClick}>
                            Add A New Task
                    </button>
                <TasksList tasks={tasks}  ></TasksList>
                </div>
            <div className="col-lg-4">
                <h2 className="text-shadow">
                    Your Completed Tasks    
                </h2>
                <TasksListComplete tasks={tasks}></TasksListComplete>
            </div>
        
        </div>
    </div>
    </>
    )
}