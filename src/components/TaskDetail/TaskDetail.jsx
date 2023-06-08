import { useState} from 'react'
import EditTaskForm from './EditTaskForm/EditTaskForm'
import FormatDate from '../FormatDate/FormatDate';


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
        
        <br />
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="card card-style">
                <div className="card-body">
                <h3>{task.title}</h3>
                <p>Description : {task.description}</p>
                <div>
                    <FormatDate tasks={[task]} />
                </div>    
                <button onClick={handleDelete} className="btn btn-info btn-styles">DELETE this task </button>
                <button onClick={toggleEditForm} className="btn btn-info btn-styles">
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