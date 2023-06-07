import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';


export default function TasksListItem({task}){ 
    const handleFormatDate = () => {
        const date = parseISO(task.dueDate);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedDueDate = `${month} ${day}, ${year} ${hours % 12}:${minutes.toString().padStart(2, '0')}${ampm}`;
        console.log(formattedDueDate); 
        return formattedDueDate
      };
    const formattedDueDate = handleFormatDate();
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
        <p>Due Date: {formattedDueDate}
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