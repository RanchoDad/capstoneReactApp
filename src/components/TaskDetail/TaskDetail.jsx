import { useState} from 'react'
import EditTaskForm from './EditTaskForm/EditTaskForm'
import FormatDate from '../FormatDate/FormatDate';


export default function TaskDetail({task
    , handleDelete
    , setTask
    , handleComplete
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
                  <h4>{task.title}</h4>
                    <p>Description : {task.description}</p>
                <div>
                    <FormatDate tasks={[task]} />
                </div>   
                   {task.completed ? (
                     <p>TASK COMPLETED</p>
                    ) : (
                    <>
                      <button onClick={handleComplete} className="btn btn-info btn-styles">
                         Click to Complete
                      </button>

                    <button
                      onClick={handleDelete}
                      className="btn btn-info btn-styles"
                      style={{ display: task.completed ? 'none' : 'inline-block' }}
                    >
                      Delete this task
                    </button>

                    <button
                      onClick={toggleEditForm}
                      className="btn btn-info btn-styles"
                      style={{ display: task.completed ? 'none' : 'inline-block' }}
                    >
                      {editFormIsOpen ? 'Close Editor' : 'Edit'}
                    </button>

                    {editFormIsOpen && (
                      <EditTaskForm
                        task={task}
                        setTask={setTask}
                        setEditFormIsOpen={setEditFormIsOpen}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}