import FormatDate from '../../FormatDate/FormatDate';
import { Link } from 'react-router-dom';
import { useState  } from 'react';
import { updateTaskRequest } from '../../../utilities/tasks-api';

export default function TasksListItem({ task, setTask, complete, onStateChange }) {
  const [error, setError] = useState('');
  const [completeTheTask, setCompleteTheTask] = useState(task.completed);
  async function handleComplete (e){
    e.preventDefault()
    onStateChange();
    const completeTask = {
      completed: true
    }
    try{
      const newTask = await updateTaskRequest(task._id, completeTask)
      setTask(newTask)
      setCompleteTheTask(true);
    }catch(err){
      setError("Try Again")
    }
  }
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-md-6"> */}
              <div className="card card-style">
           
                {task && (
                <Link to={`/tasks/${task._id}`} className="card-link remove-line">
                <div className="card-body ">
                  <p>{task.title}</p>
                  <p>Description: {task.description}</p>
                  <FormatDate tasks={[task]} />
                  {completeTheTask ? (
                    <p>The Task is Complete!</p>
                  ) : (
                  <button onClick={handleComplete} className="btn btn-info btn-styles">
                    Click to Complete</button>
                )}
                </div>
                </Link>
                )}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
