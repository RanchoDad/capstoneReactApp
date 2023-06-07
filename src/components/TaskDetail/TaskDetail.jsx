import { useState} from 'react'
import EditTaskForm from './EditTaskForm/EditTaskForm'
export default function TaskDetail({task
    , handleDelete
    , setTask
}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => !prevState);
    }
    return (
        <>
        <h1>This is the detail page</h1>
        <br />
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="card">
                <div className="card-body">
                <h3>{task.title}</h3>
                <p>Description : {task.description}</p>
                <p>Due Date: {task.dueDate}</p>
                
                <button onClick={handleDelete}>DELETE this task </button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditTaskForm 
                        task={task} 
                        setTask={setTask} 
                        setEditFormIsOpen={setEditFormIsOpen}/>    
                }
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}