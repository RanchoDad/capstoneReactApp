import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateTaskRequest } from '../../../utilities/tasks-api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

export default function EditTaskForm({task, setTask, setEditFormIsOpen}){
    const navigate = useNavigate();
    const titleRef = useRef(task.title)
    const descriptionRef = useRef(task.description)
    const dueDateRef = useRef(task.dueDate); 
    const [error, setError] = useState('')
    
 
    async function handleSubmit(e){
        e.preventDefault()
        const updatedTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: dueDateRef.current.value,
        }
        try{
            const newTask = await updateTaskRequest(task._id, updatedTask)
            setTask(newTask)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Try Again")
        }
    }
    return(
        <>
        <h3>Edit Below</h3>
        { error && <p>{JSON.stringify(error)}</p>}
        <div className="itemStyle">
        <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef}/>

                <label htmlFor="dueDate">Due Date</label>
                <input type="date" ref={dueDateRef}/>
                <button>Edit Your Task</button>
            </form>
            </div>
            </>
    )
}