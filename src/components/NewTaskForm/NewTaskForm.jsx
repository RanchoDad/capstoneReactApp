import React, { useRef, useState } from 'react';
import { createTaskRequest } from '../../utilities/tasks-api';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function NewTaskForm(){
    const navigate = useNavigate();
    const titleRef = useRef('')
    const descriptionRef = useRef('')
    const [date, setDate] = useState(null);
    const [error, setError] = useState('')
    
    
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: date
        }

        try{
            const newTaskResponse = await createTaskRequest(newTask)
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
                <DatePicker 
                    placeholderText='When is the due date?'
                    minDate={new Date()}
                    showTimeSelect
                    timeIntervals={30}
                    selected={date} 
                    onChange={(date) => setDate(date)}
                    />
                <button>Add the Task</button>
            </form>
        </>

    )
}