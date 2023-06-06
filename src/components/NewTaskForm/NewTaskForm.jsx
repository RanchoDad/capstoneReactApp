import React, { useRef, useState } from 'react';
import { createTaskRequest } from '../../utilities/tasks-api';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';



export default function NewTaskForm(){
    const navigate = useNavigate();
    const titleRef = useRef('')
    const descriptionRef = useRef('')
    const [finishByDate, setFinishByDate] = useState(null); 
    const completedRef = useRef('')
    const [error, setError] = useState('')
    
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
      
        const newTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: finishByDate,
            completed: completedRef.current.checked
        }

        try{
            const newTaskResponse = await createTaskRequest(newTask)
            console.log(newTaskResponse)
            navigate('/tasks')
        }catch(err){
            setError(err)
        }
    }

    return (
        <>
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
                <button>Add the Task</button>
            </form>
        </>

    )
}