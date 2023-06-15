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
            dueDate: date,
            completed: false
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

            <div class="container">
            <div class="row">
            <div className='col-lg-4 offset-lg-4'>
            <form className="form-container form-container-color" onSubmit={handleSubmit}>
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
                <button className="btn btn-info btn-style">Add the Task</button>
            </form>
            </div>
            </div>
            </div>
        </>

    )
}