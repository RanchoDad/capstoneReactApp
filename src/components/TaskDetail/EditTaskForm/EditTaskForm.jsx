import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateTaskRequest } from '../../../utilities/tasks-api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

export default function EditTaskForm({task, setTask, setEditFormIsOpen}){
    const navigate = useNavigate();
    const titleRef = useRef('')
    const descriptionRef = useRef('')
    const [finishByDate, setFinishByDate] = useState(null); 
    const completedRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: finishByDate,
            completed: completedRef.current.checked
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
        <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef}/>

                <label htmlFor="dueDate">Due Date</label>
                { <DatePicker 
                selected= {finishByDate}  
                onChange={(date) => setFinishByDate(date)} 
                id="dueDate"
                showTimeSelect 
                timeIntervals={30}
                timeCaption="Time" 
                /> }
                <label htmlFor="completed">Has this been completed?</label>
                <input type="checkbox" id="completed" ref={completedRef}/>
                <button>Edit Your Task</button>
            </form>
            </>
    )
}