import React, { useRef, useState } from 'react';
import { createTaskRequest } from '../../utilities/tasks-api';
import { useNavigate } from 'react-router-dom';
import DatePicked from '../DatePicked/DatePicked';



export default function NewTaskForm(){
    const navigate = useNavigate();
    const titleRef = useRef('')
    const descriptionRef = useRef('')
    const finishByRef = useRef('')
    const completedRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: finishByRef.current.value,
            completed: completedRef.current.checked
        }
        try{
            const newTaskResponse = await createTaskRequest(newTask)
            console.log(newTaskResponse)
            navigate('/usertasks')
        }catch(err){
            setError(err)
        }
        
    }
    return (
        <>
            { error && <p>{JSON.stringify(error)}</p>}
            <form class="d-flex flex-column flex-md-row" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />

                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef}/>

                <label htmlFor="finishBy">Due Date</label>
                <DatePicked 
                    id="finishBy" 
                    selected={finishByRef.current}
                    onChange={(date) => (finishByRef.current = date)}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()} 
                />
                <label htmlFor="completed">Has this been completed?</label>
                <input type="checkbox" id="completed" ref={completedRef}/>
                <button>Add the Task</button>
            </form>
        </>

    )
}