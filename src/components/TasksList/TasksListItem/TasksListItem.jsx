import { Link } from 'react-router-dom';
import FormatDate from '../../FormatDate/FormatDate';

export default function TasksListItem({task}){ 
   
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body"></div>
            {task && <p>
            <Link to={`/tasks/${task._id}`}>
                {task.title}
            </Link>
        </p>}
        <p>Description: {task.description}</p>
        <p>Due Date:
            <FormatDate tasks={[task]} />
        </p>
        <p>Completed: {task.completed}</p>
        {/* must make the above a boolean checkbox that changes background color and 
        does a calculation of how long it took to complete, what percentage of time 
        from creation to due date was used to complete it and have that compiled into
        a stat tracker in a right hand column of the main page */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}